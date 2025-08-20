import React, { useEffect } from "react";
import UnderDevelopment from "../UnderDevelopment";
import { useLocation } from "react-router-dom";
import Hero from "../../component/TechnologiesComponents/Hero";
import TechCard from "../../component/TechnologiesComponents/TechCard";

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
    <div>
      <Hero/>
      <TechCard/>
    </div>
  );
};

export default Technologies;
