import React from "react";
import "./App.css";
import Header from "../src/components/header/Header.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import MenuSection from "../src/components/menusection/MenuSection.jsx";
import CartProvider from "../src/components/menusection/CartContext.jsx";

const App = () => {
    return (
      <CartProvider>
        <Header />
        <div className="skew"></div>
        <MenuSection />
        <Footer />
      </CartProvider>
    );
  };


export default App;
