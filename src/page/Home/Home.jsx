import React, { useEffect } from 'react';
import Hero from '../../component/Home/hero';
import HeroBottom from '../../component/Home/HeroBottom';
import EasyProcess from '../../component/Home/Easy-Process';
import Specialized from '../../component/Home/Specialized';
import TechnologiesCrosale from '../../component/Home/TechnologiesCrosale';
import TestimonialsSection from '../../component/Testimonials/TestimonialsSection';
import { useLocation } from 'react-router-dom';
import From from '../../component/From';

const Home = () => {
  const location = useLocation(); // ✅ correct usage

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Home | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; // fallback
    }
  }, [location]);

  return (
    <>
    <div className='overflow-x-hidden select-none'> 
      <Hero />
      {/* <HeroBottom />   */}
      <EasyProcess />
      <Specialized />
      <TechnologiesCrosale />
      <TestimonialsSection />
      <From/>
    </div>
    </>
  );
};

export default Home;
