import React, { useEffect } from "react";
import type { JSX } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import CurveAfterHeader from "./components/header/skewAfterHeader/CurveAfterHeader.js";
import HomePage from "./components/homesection/HomePage.js";
import LogSection from "./components/logsection/LogSection.js";
import MenuSection from "./components/menusection/MenuSection.js";
import NotFound from "./components/404/Error";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./components/hooks/hooks";
import { selectTheme } from "./redux/themeSlice";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector((state) => state.auth.user);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={
          <>
            <CurveAfterHeader />
            <LogSection />
          </>
        } />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <>
                <CurveAfterHeader />
                <MenuSection />
              </>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
