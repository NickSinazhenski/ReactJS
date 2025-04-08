import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header.jsx';
import Footer from './components/Footer.jsx';   
import MenuSection from './components/MenuSection.jsx';
function App() {
  return (
    <>
      <Header />
      <div className="skew"></div>
      <MenuSection />
      <Footer />
    </>
  );
}

export default App
