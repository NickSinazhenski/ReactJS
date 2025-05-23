import React from "react";
import "./App.css";
import Header from "../src/components/header/Header.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import MenuSection from "../src/components/menusection/MenuSection.jsx";
import CartProvider from "../src/components/menusection/CartContext.jsx";
import CurveAfterHeader from "../src/components/header/skewafterheader/CurveAfterHeader.jsx";
import HomePage from "./components/homesection/HomePage.jsx";
import LogSection from "./components/logsection/LogSection.jsx";

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
