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
        <div className="relative z-20 max-w-4xl h-[400px] flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold">
            Our <span className="text-secondary">Technologies</span> Stack
          </h1>
          <p className="text-white text-sm sm:text-base md:text-[18px]">
            We specialize in helping you build a team of expert developers.
              From web development to artificial intelligence, we leverage
            cutting-edge technologies to deliver comprehensive IT solutions
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full h-auto px-4 pt-20 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 bg-white overflow-hidden">
        <div className="w-full flex flex-col gap-20 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-primary font-semibold">
              Technologies
            </h1>
            <p className="text-black text-sm w-2/4 sm:w-full ">
              Using the right technology for the right problem is our mantra. We
              are agile about learning new processes and tools to save time and
              reduce complexity
            </p>
          </div>
          {/* other comonents  */}
        </div>
      </section>
    </>
  );
};

export default Hero;
