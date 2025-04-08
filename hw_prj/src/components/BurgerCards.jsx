import React from 'react';
import styles from './BurgerCards.module.css';

const BurgerCard = ({ image, title, description, price }) => {
    return (
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} />
  
        <div className={styles.main_part}>
          <div className={styles.top}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.price}>${price.toFixed(2)} USD</span>
          </div>
  
          <p className={styles.description}>{description}</p>
  
          <div className={styles.bottom}>
            <input type="number" min="1" defaultValue="1" className={styles.count_in_order} />
            <button className={styles.button}>Add to card</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BurgerCard;