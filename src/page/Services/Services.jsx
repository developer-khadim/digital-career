import React, { useEffect } from 'react'
import UnderDevelopment from '../UnderDevelopment'
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === "/services") {
      document.title = " Services | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; 
    }
  }, [location]);
  return (
    <div><UnderDevelopment/> </div>
  )
}

export default Services