import React, { createContext, useState, useCallback, ReactNode } from 'react';

type CartItem = {
  id: string | number;
  count: number;
  [key: string]: any;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  getTotalCount: () => number;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: CartItem) => {
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
