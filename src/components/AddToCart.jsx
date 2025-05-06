import React, { Component } from 'react';
import styles from './BurgerCards.module.css';
import { CartContext } from '../components/CartContext';

class AddToCart extends Component {
    static contextType = CartContext;
  
    handleAdd = () => {
        const { item } = this.props;
        const quantity = parseInt(this.inputRef.value, 10) || 1;
        this.context.addToCart({ ...item, count: quantity });
      };
  
    render() {
      return (
        <div className={styles.bottom}>
     <input type="number" min="1" defaultValue="1" className={styles.count_in_order} ref={(ref) => (this.inputRef = ref)}/>
      <button className={styles.button} onClick={this.handleAdd}>Add to cart</button>
    </div>
      );
    }
  }
  
  export default AddToCart;
  