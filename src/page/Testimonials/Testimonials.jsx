import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import TestimonialsSection from '../../component/Testimonials/TestimonialsSection';

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
      <TestimonialsSection />
    </div>
  )
}

export default Testimonials