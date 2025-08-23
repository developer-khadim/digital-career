import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import TestimonialsSection from '../../component/Testimonials/TestimonialsSection';
import Hero from '../../component/Testimonials/Hero';

const Testimonials = () => {
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === "/testimonials") {
      document.title = "Testimonials | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency"; 
    }
  }, [location]);
  
  return (
    <div className="overflow-x-hidden select-none">
      <Hero />
      <TestimonialsSection />
    </div>
  )
}

export default Testimonials