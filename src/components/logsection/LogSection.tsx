import { useState, FormEvent, FC, ChangeEvent } from 'react';
import { auth } from '../../firebase/firebase'; 
import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import styles from './LogSection.module.css';


const LogSection: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const firebaseResponse = await signInWithEmailAndPassword(auth, email, password);
      setUser(firebaseResponse.user);
      setError('');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div className={styles.login_container}>
      {!user && <h1 className={styles.login_title}>Log in</h1>}
      <div className={styles.login_box}>
        {!user ? (
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <label>
              <span>User name</span>
              <input
                type="text"
                placeholder="UserName"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                placeholder="********************"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </label>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className={styles.login_button_container}>
              <button type="submit" className={styles.button_submit}>Submit</button>
            </div>
          </form>
        ) : (
          <div className={styles.login_form}>
            <h2>Welcome, {user.email}</h2>
            <div className={styles.logout_button_container}>
            <button onClick={handleLogout} className={styles.button_submit}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default LogSection;
