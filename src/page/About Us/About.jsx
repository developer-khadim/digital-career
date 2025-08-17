import React, { useEffect } from 'react'
import UnderDevelopment from '../UnderDevelopment'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation(); // ✅ correct usage

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "About Us | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; // fallback
    }
  }, [location]);
  return (
    <>
    <UnderDevelopment/>  
      </>
  )
}

export default About