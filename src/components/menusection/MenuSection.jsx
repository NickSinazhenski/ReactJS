import React, { useState, useEffect } from "react";
import styles from "./MenuSection.module.css";
import BurgerCard from "./BurgerCards.jsx";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";

const MenuSection = () => {
  const [meals, setMeals] = useState([]);
  const [visibleMeals, setVisibleMeals] = useState(6);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const clickableCategories = [
    { label: "Desert", value: "Dessert" },
    { label: "Dinner", value: "Dinner" },
    { label: "Breakfast", value: "Breakfast" },
  ];

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSeeMore = () => {
    setVisibleMeals((prev) => prev + 6);
  };

  const сategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleMeals(6);
  };

  if (loading) return <p className={styles.status}>Loading meals...</p>;
  if (error) return <p className={styles.status}>Error loading meals</p>;

  const filteredMeals = selectedCategory
    ? meals.filter((meal) => meal.category === selectedCategory)
    : meals;
  const visibleItems = filteredMeals.slice(0, visibleMeals);

  return (
    <section className={styles.menu_section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Browse our menu</h2>
        <p className={styles.heading_description}>
          Use our menu to place an order online, or{" "}
          <span className={styles.phone_tooltip} data-tooltip="+37009699350">
            phone
          </span>{" "}
          our store to place a pickup order. Fast and fresh food.
        </p>

        <div className={styles.meal_types}>
          {clickableCategories.map((category, index) => (
            <button key={index} className={styles.meal_type} onClick={() => сategoryClick(category.value)}>
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <BurgerCard items={visibleItems} />
        </div>

        {visibleMeals < filteredMeals.length && (
          <button className={styles.see_more_txt} onClick={handleSeeMore}>
            See more
          </button>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
