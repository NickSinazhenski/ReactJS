import React, { FC, useRef } from "react";
import styles from "./BurgerCards.module.css";
import { useAppDispatch } from "../../../src/components/hooks/hooks";
import { addItem } from "../../redux/cartSlice";

type Item = {
  id: string | number;
  [key: string]: any;
};

type AddToCartProps = {
  item: Item;
};

const AddToCart: FC<AddToCartProps> = ({ item }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const quantity = parseInt(inputRef.current?.value || "1", 10);
    dispatch(addItem({ ...item, count: quantity }));
  };

  return (
    <div className={styles.bottom}>
      <input
        type="number"
        min="1"
        defaultValue="1"
        className={styles.count_in_order}
        ref={inputRef}
      />
      <button className={styles.button} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
