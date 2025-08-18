import React, { useEffect } from 'react'
import Hero from '../../component/Careers/Hero'
import { useLocation } from 'react-router-dom';
import From from '../../component/From';
import ContactForm from '../../component/Careers/ContactForm';

const Careers = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === "/careers") {
      document.title = "Careers | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; 
    }
  }, [location]);
  return (
    <>
        <Hero/>
        <From/>
        {/* <ContactForm/> */}
    </>
  )
}

export default Careers