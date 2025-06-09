import React, { FC } from "react";
import styles from "./Header.module.css";
import HeaderBasket from "./HeaderBasket";
import logo from "../../assets/logo.png";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="" className={styles.logoLink}>
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <div className={styles.menu_list}>
          <nav className={styles.nav}>
            <a href="" className={styles.link}>
              Home
            </a>
            <a href="" className={styles.link}>
              Menu
            </a>
            <a href="" className={styles.link}>
              Company
            </a>
            <a href="" className={styles.link}>
              Login
            </a>
          </nav>
          <HeaderBasket />
        </div>
      </div>
    </header>
  );
};

export default Header;
