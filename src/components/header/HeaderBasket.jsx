import React, { useContext } from "react";
import styles from "./Header.module.css";
import basketIcon from "../../assets/cart.png";
import { CartContext } from "../menusection/CartContext";

const HeaderBasket = () => {
  const { getTotalCount } = useContext(CartContext);
  const totalCount = getTotalCount();

  return (
    <div className={styles.basket}>
      <img className={styles.basket} src={basketIcon} alt="Cart" />
      {totalCount > 0 && (<span className={styles.cart_count}>{totalCount}</span>)}
    </div>
  );
};
export default HeaderBasket;