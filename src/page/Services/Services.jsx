import React, { useEffect } from 'react'
import UnderDevelopment from '../UnderDevelopment'
import { useLocation } from 'react-router-dom';
import Hero from '../../component/OurServices/Hero';
import ServicesItems from '../../component/OurServices/ServicesItems';
import From from '../../component/From';

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
    <>
      <div className='select-none' >
        <Hero/>
        <ServicesItems/>
          <From/>
      </div>
    </>
  )
}

export default Services