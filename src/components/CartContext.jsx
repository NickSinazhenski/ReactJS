import React, { createContext, Component } from 'react';

export const CartContext = createContext();

class CartProvider extends Component {
  state = {
    cartItems: []
  };

  addToCart = (item) => {
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        return {
          cartItems: prevState.cartItems.map((i) =>
            i.id === item.id ? { ...i, count: i.count + item.count } : i
          )
        };
      } else {
        return {
          cartItems: [...prevState.cartItems, { ...item }]
        };
      }
    });
  };

  getTotalCount = () => {
    return this.state.cartItems.reduce((sum, item) => sum + item.count, 0);
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          getTotalCount: this.getTotalCount
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartProvider;
