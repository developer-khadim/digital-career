import React from "react";
import bgoverlay from "../../assets/herofromoverlay.png";
import herobg from "../../assets/herofrom.png";
import { FaBriefcase, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import { BsGraphUpArrow } from 'react-icons/bs';
import { Link } from "react-router-dom";

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
        <div className="relative z-20 max-w-4xl h-[500px] flex flex-col items-center justify-center gap-6 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            About Digital Career Agency
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            <span className="text-secondary font-semibold">Digital Career Agency</span> is a modern platform built to empower individuals and businesses in
            today's digital-first world. We bridge the gap between talent and
            opportunity by offering career-focused digital services, freelancing
            solutions, and practical training programs.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To unlock digital career opportunities for freelancers, students, and businesses by providing the right tools, resources, and guidance. We aim to help people earn, grow, and thrive online through freelancing and digital skills.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Freelancing Platform Management */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-secondary text-3xl mb-4">
                <BsGraphUpArrow />
              </div>
              <h3 className="text-xl font-semibold mb-4">Freelancing Platform Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Profile creation and optimization</li>
                <li>• Gig optimization and ranking</li>
                <li>• Order handling and delivery support</li>
              </ul>
            </div>

            {/* Digital Career Training */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-secondary text-3xl mb-4">
                <FaGraduationCap />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Career Training</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Hands-on internships</li>
                <li>• Practical project exposure</li>
                <li>• Commission-based earning</li>
              </ul>
            </div>

            {/* Business Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-secondary text-3xl mb-4">
                <FaBriefcase />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Solutions</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Effective outsourcing solutions</li>
                <li>• Skilled freelancer provision</li>
                <li>• Quality-assured services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
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
      </section>

      {/* Vision Section */}
      <section className="w-full py-16 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed mb-8">
              We envision a future where every individual in Pakistan and beyond has access to global opportunities through freelancing and digital skills. By nurturing young talent and providing them with the right direction, we aim to become a leading agency in digital careers and outsourcing.
            </p>
            <div className="text-xl font-semibold text-secondary">
              "Digital Career Agency – Building Skills, Creating Opportunities."
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-4">
              Want to learn more about our services or discuss how we can help you?
            </p>
           <Link
  to="/contact"
  className="inline-block bg-secondary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
>
  Contact Us
</Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
