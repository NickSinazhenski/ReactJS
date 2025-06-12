import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css"; 
import image from "../../assets/error.jpg"; 

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="Error illustration" className={styles.image} />
      <Link to="/" className={styles.link}>Return Home</Link>
    </div>
  );
};

export default NotFound;