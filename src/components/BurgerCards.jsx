import React, { Component } from 'react';
import styles from './BurgerCards.module.css';
import AddToCart from './AddToCart';

class BurgerCards extends Component {
  render() {
    const { items = [] } = this.props;

    return (
      <>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img className={styles.image} src={item.img} alt={item.meal} />

            <div className={styles.main_part}>
              <div className={styles.top}>
                <h3 className={styles.title}>{item.meal}</h3>
                <span className={styles.price}>${item.price}</span>
              </div>

              <p className={styles.description}>{item.area}</p>

              <div className={styles.bottom}>
                <AddToCart item={item} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default BurgerCards;
