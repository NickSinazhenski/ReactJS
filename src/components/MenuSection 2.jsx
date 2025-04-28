import React, { Component } from 'react';
import styles from './MenuSection.module.css';
import BurgerCard from './BurgerCards.jsx';

const API_URL = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

class MenuSection extends Component {
  state = {
    meals: [],
    visibleMeals: 6,
    error: null,
    loading: true,
    clickableCategories: ['Dessert', 'Dinner', 'Breakfast']
  };

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ meals: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  handleSeeMore = () => { this.setState((prevState) => ({
     visibleMeals: prevState.visibleMeals + 6 }));
     };

  render() {
    const { meals, visibleMeals, loading, error } = this.state;
    if (loading) return <p className={styles.status}>Loading meals...</p>;
    if (error) return <p className={styles.status}>Error loading meals</p>;
    const visibleItems = meals.slice(0, visibleMeals);

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
            <button className={styles.meal_type} disabled>Dessert</button>
            <button className={styles.meal_type} disabled>Dinner</button>
            <button className={styles.meal_type} disabled>Breakfast</button>
          </div>

          <div className={styles.grid}>
            <BurgerCard items={visibleItems} />
          </div>

          {visibleMeals < meals.length && (
            <button className={styles.see_more_txt} onClick={this.handleSeeMore}>
              See more
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default MenuSection;
