import React from "react";
import bgoverlay from "../../assets/herofromoverlay.png";
import herobg from "../../assets/herofrom.png";
// import { FaBriefcase, FaGraduationCap, FaHandshake } from 'react-icons/fa';
// import { BsGraphUpArrow } from 'react-icons/bs';

const Hero = () => {
  return (
    <>
      {/* Background Section with Overlay */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 z-10"
          style={{ backgroundImage: `url(${bgoverlay})` }}
        />

        {/* Text Content */}
        <div className="relative z-20 w-full px-4 py-6 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 h-[500px] flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            <span className="text-secondary"> About </span>Digital Career Agency
          </h1>
          <p className="text-white text-sm sm:text-base md:text-[18px]">
            is a modern platform built to empower individuals and businesses in
            today's digital-first world. We bridge the gap between talent and
            opportunity by offering career-focused digital services, freelancing
            solutions, and practical training programs.
          </p>
        </div>
      </div>

     

      {/* Target Audience Section
      <section className="w-full bg-gray-50 ">
        <div className="w-full py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Who We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <FaGraduationCap className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Students & Fresh Graduates</h3>
              <p className="text-gray-600">Starting their freelancing journey</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaHandshake className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Freelancers</h3>
              <p className="text-gray-600">Scaling up gigs and profiles</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FaBriefcase className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Businesses & Startups</h3>
              <p className="text-gray-600">Digital services and outsourcing</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
