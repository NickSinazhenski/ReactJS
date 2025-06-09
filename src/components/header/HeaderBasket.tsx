import { FC, useContext } from "react";
import styles from "./Header.module.css";
import basketIcon from "../../assets/cart.png";
import { CartContext, type CartContextType } from "../menusection/CartContext";

const HeaderBasket: FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { getTotalCount } = cartContext;
  const totalCount = getTotalCount();

  return (
    <div className={styles.basket}>
      <img className={styles.basket} src={basketIcon} alt="Cart" />
      {totalCount > 0 && (<span className={styles.cart_count}>{totalCount}</span>)}
    </div>
  );
};
export default HeaderBasket;