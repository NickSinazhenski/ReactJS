import React, { useContext, useRef } from "react";
import styles from "./BurgerCards.module.css";
import { CartContext } from "./CartContext";

const AddToCart = ({ item }) => {
  const inputRef = useRef(null);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    const quantity = parseInt(inputRef.current.value, 10) || 1;
    addToCart({ ...item, count: quantity });
  };

  return (
    <div className={styles.bottom}>
      <input type="number" min="1" defaultValue="1" className={styles.count_in_order} ref={inputRef}/>
      <button className={styles.button} onClick={handleAdd}> Add to cart</button>
    </div>
  );
};


export default AddToCart;
