import React from "react";
import bgoverlay from "../../assets/herofromoverlay.png";
import herobg from "../../assets/herofrom.png";


const Hero = () => {
  return (
    <>
      {/* Background Section with Overlay */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center "
        style={{ backgroundImage: `url(${herobg})` }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 z-10"
          style={{ backgroundImage: `url(${bgoverlay})` }}
        />

        {/* Text Content */}
        <div className="relative z-20 max-w-3xl h-[400px] flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold">
            What Our <span className="text-secondary">Clients</span> Say
          </h1>
          <p className="text-white text-sm sm:text-base md:text-[18px]">
            Hear directly from our clients and partners about their experiences working with Digital Career Agency. Your feedback inspires us to deliver excellence every day.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
