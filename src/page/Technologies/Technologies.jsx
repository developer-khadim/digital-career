import React, { useEffect } from 'react'
import UnderDevelopment from '../UnderDevelopment'
import { useLocation } from 'react-router-dom';

const Technologies = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === "/technologies") {
      document.title = " Technologies | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; 
    }
  }, [location]);
  return (
    <div><UnderDevelopment/> </div>
  )
}

export default Technologies