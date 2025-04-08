import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png'; 
import basket from '../assets/cart.png'; 

const Header = () => {
    return (
      <header className={styles.header}>
       <div className={styles.container}>
  <a href="" className={styles.logoLink}>
    <img src={logo} alt="logo" className={styles.logo} />
  </a>

  <div className={styles.menu_list}>
    <nav className={styles.nav}>
      <a href="" className={styles.link}>Home</a>
      <a href="" className={styles.link}>Menu</a>
      <a href="" className={styles.link}>Company</a>
      <a href="" className={styles.link}>Login</a>
    </nav>

    <div className={styles.basket}>
      <img src={basket} alt="basket" />
      <span className={styles.num_orders}>0</span>
    </div>
  </div>
</div>
      </header>
    );
  };
  
  export default Header;