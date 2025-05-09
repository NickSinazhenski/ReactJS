import React from "react";
import "./App.css";
import Header from "../src/components/header/Header.jsx";
import Footer from "../src/components/footer/Footer.jsx";
import MenuSection from "../src/components/menusection/MenuSection.jsx";
import CartProvider from "../src/components/menusection/CartContext.jsx";
import CurveAfterHeader from "../src/components/header/skewafterheader/CurveAfterHeader.jsx";
import HomePage from "../src/components/homepage/HomePage.jsx";

  // App component

const App = () => {

    return (
      <CartProvider>
        <Header />
        < MenuSection/>
        <Footer />
      </CartProvider>
    );
  };

export default App;
