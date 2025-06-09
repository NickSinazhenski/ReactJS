import React, { FC, useRef, useContext } from "react";
import styles from "./BurgerCards.module.css";
import { CartContext } from "./CartContext";

type Item = {
  id: string | number;
  [key: string]: any;
};

type CartItem = {
  id: string | number;
  count: number;
  [key: string]: any;
};

type CartContextType = {
  addToCart: (item: CartItem) => void;
};

type AddToCartProps = {
  item: Item;
};

const AddToCart: FC<AddToCartProps> = ({ item }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const cartContext = useContext(CartContext) as CartContextType;
  const { addToCart } = cartContext;

  const handleAdd = () => {
    const quantity = parseInt(inputRef.current?.value || "1", 10);
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
