import { FC } from "react";
import styles from "./Header.module.css";
import basketIcon from "../../assets/cart.png";
import { useAppSelector } from "../../components/hooks/hooks";
import { selectTotalCount } from "../../redux/cartSlice";

const HeaderBasket: FC = () => {
  const totalCount = useAppSelector(selectTotalCount);

  return (
    <div className={styles.basket}>
      <img className={styles.basket} src={basketIcon} alt="Cart" />
      {totalCount > 0 && (
        <span className={styles.cart_count}>{totalCount}</span>
      )}
    </div>
  );
};
export default HeaderBasket;
