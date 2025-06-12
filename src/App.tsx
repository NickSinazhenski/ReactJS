import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import MenuSection from "./components/menusection/MenuSection.js";
import CurveAfterHeader from "./components/header/skewAfterHeader/CurveAfterHeader.js";
import HomePage from "./components/homesection/HomePage.js";
import LogSection from "./components/logsection/LogSection.js";

const App = () => {
  return (
    <>
      <Header />
      <CurveAfterHeader />
      <MenuSection />
      <Footer />
    </>
  );
};

export default App;
