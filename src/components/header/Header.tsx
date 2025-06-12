import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { selectTheme, toggleTheme } from "../../redux/themeSlice";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderBasket from "./HeaderBasket";
import logo from "../../assets/logo.png";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
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
          <button onClick={() => dispatch(toggleTheme())} className={styles.themeToggle}>
            {theme === "light" ? " Dark" : " Light"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
