import React, { useEffect } from 'react'
import Hero from '../../component/Careers/Hero'
import { useLocation } from 'react-router-dom';
import From from '../../component/From';

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
      <div className='select-none' >
          <Hero/>
        <From/>
      </div>
       
    </>
  )
}

export default Careers