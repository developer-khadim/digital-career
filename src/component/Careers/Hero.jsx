import React from "react";
import bgoverlay from "../../assets/herofromoverlay.png";
import herobg from "../../assets/herofrom.png";
import Job from "./Job";

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
            Careers
          </h1>
          <p className="text-white text-sm sm:text-base md:text-[18px]">
            Do you want to learn more about Courtney? Our team is looking for
            people who want to work on interesting international projects,
            develop and learn new skills, and share what they've learned with
            others.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full h-auto px-4 pt-20 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 bg-white overflow-hidden">
        <div className="w-full flex flex-col gap-20 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-primary font-semibold">
              Please join us
            </h1>
            <p className="text-primary text-sm ">
              Take a look at the open positions below.{" "}
            </p>
            <p className="text-primary text-sm ">
              If none of them suit you, or you feel you could help us in other
              ways, please fill out the form below <br /> or contact us directly
              at{" "}
              <a
                href="mailto:digitalcareerIT@gmail.com"
                className="text-secondary"
                target="__blank"
              >
                digitalcareerIT@gmail.com
              </a>
            </p>
          </div>
          <Job />
        </div>
      </section>
    </>
  );
};

export default Hero;

