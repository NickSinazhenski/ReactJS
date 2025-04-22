import React from 'react';
import styles from './MenuSection.module.css';
import BurgerCard from './BurgerCards.jsx';

import burger1 from '../assets/burger_1.png';
import burger2 from '../assets/burger_2.png';
import burger3 from '../assets/burger_3.png';
import burger4 from '../assets/burger_4.png';
import burger5 from '../assets/burger_5.png';
import burger6 from '../assets/burger_6.png';

const MenuSection = () => {
  return (
    <section className={styles.menu_section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Browse our menu</h2>
        <p className={styles.heading_description}>
             Use our menu to place an order online, or{' '}
                <span className={styles.phone_tooltip} data-tooltip="+37009699350">phone</span>{' '}
             our store to place a pickup order. Fast and fresh food.
        </p>

        <div className={styles.meal_types}>
          <button className={styles.meal_type}>Desert</button>
          <button className={styles.meal_type}>Dinner</button>
          <button className={styles.meal_type}>Breakfast</button>
        </div>

        <div className={styles.grid}>
          <BurgerCard image={burger1} title="Burger Dreams" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={9.2} />
          <BurgerCard image={burger2} title="Burger Waldo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={10} />
          <BurgerCard image={burger3} title="Burger Cali" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={8} />
          <BurgerCard image={burger4} title="Burger Bacon Buddy" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={9.99} />
          <BurgerCard image={burger5} title="Burger Spicy" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={9.2} />
          <BurgerCard image={burger6} title="Burger Classic" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={8} />
        </div>

        <button className={styles.see_more_txt}>See more</button>
      </div>
    </section>
  );
};

export default MenuSection;