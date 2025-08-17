import React, { useEffect } from 'react';
import UnderDevelopment from '../UnderDevelopment';
import { useLocation } from 'react-router-dom';

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
      <UnderDevelopment />
    </div>
  );
};

export default WhatAreWe;
