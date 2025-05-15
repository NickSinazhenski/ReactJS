import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count + item.count } : i
        );
      } else {
        return [...prevItems, { ...item }];
      }
    });
  }, []);

  const getTotalCount = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.count, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getTotalCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
