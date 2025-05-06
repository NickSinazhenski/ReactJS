import React, { Component } from 'react';
import styles from './Header.module.css';
import basket from '../assets/cart.png'; 
import { CartContext } from '../components/CartContext';

class HeaderBasket extends Component {
    static contextType = CartContext;
  
    render() {
      const totalCount = this.context.getTotalCount();
  
      return (
        <div className={styles.basket}>
          <img className={basket} src={basket} alt="Cart" />
          {totalCount > 0 && (<span className={styles.cart_count}>{totalCount}</span> )}
        </div>
      );
    }
  }
  
  export default HeaderBasket;