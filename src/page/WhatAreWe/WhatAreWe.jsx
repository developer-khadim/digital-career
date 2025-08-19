import React, { useEffect } from 'react';
import UnderDevelopment from '../UnderDevelopment';
import { useLocation } from 'react-router-dom';
import Hero from '../../component/Aboutus/Hero';

const WhatAreWe = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/what-are-we") {
      document.title = "What We Are | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; // fallback
    }
  }, [location]);

  return (
    <div>
      <Hero/>
    </div>
  );
};

export default WhatAreWe;
