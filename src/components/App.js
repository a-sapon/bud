import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import { Home } from '../pages/homePage/Home';
import { Contact } from '../pages/contactPage/Contact';
import Calculator from '../pages/calculator/Calculator';
import { Footer } from './footer/Footer';
import CallButton from './callButton/CallButton';

export const ScreenContext = createContext();

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };
    checkScreenWidth();
  }, []);

  return (
    <ScreenContext.Provider value={isMobile}>
      <Home />
      <Calculator />
      <Contact />
      <Footer />
      <CallButton />
    </ScreenContext.Provider>
  );
};
