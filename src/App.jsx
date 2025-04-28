import React, { Component } from 'react';
import './App.css'
import Header from '../src/components/Header.jsx';
import Footer from './components/Footer.jsx';   
import MenuSection from './components/MenuSection.jsx';
import CartProvider from '../src/components/CartContext.jsx';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Header />
        <div className="skew"></div>
        <MenuSection />
        <Footer />
      </CartProvider>
    );
  }
}

export default App;
