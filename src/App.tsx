import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import MenuSection from "./components/menusection/MenuSection.js";
import CartProvider from "./components/menusection/CartContext.js";
import CurveAfterHeader from "./components/header/skewAfterHeader/CurveAfterHeader.js";
import HomePage from "./components/homesection/HomePage.js";
import LogSection from "./components/logsection/LogSection.js";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <CurveAfterHeader />
      <LogSection />
      <Footer />
    </CartProvider>
  );
};

export default App;
