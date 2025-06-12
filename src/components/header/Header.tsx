import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderBasket from "./HeaderBasket";
import logo from "../../assets/logo.png";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.menu_list}>
          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/order" className={styles.link}>
              Menu
            </Link>
            <Link to="/company" className={styles.link}>
              Company
            </Link>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </nav>
          <HeaderBasket />
        </div>
      </div>
    </header>
  );
};

export default Header;
