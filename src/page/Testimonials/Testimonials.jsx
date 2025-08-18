import React, { useEffect } from 'react'
import UnderDevelopment from '../UnderDevelopment'
import { useLocation } from 'react-router-dom';

const Testimonials = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === "/testimonials") {
      document.title = " Testimonials | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; 
    }
  }, [location]);
  return (
    <div><UnderDevelopment/>  </div>
  )
}

export default Testimonials