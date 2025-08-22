import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../../component/Aboutus/Hero';
import AboutFeatures from '../../component/Aboutus/AboutFeatures';
import AboutHistory from '../../component/Aboutus/AboutHistory';
import AboutValues from '../../component/Aboutus/AboutValues';
import From from '../../component/From';

const WhatAreWe = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/what-are-we") {
      document.title = "What We Are | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency";
    }
  }, [location]);

  return (
    <motion.div 
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Company History & Stats */}
      <AboutHistory />

      {/* Core Values */}
      <AboutValues />

      {/* Features/Why Choose Us */}
      <AboutFeatures />

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-white/90">Team Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-white/90">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">300+</h3>
              <p className="text-white/90">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-white/90">Countries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <From />
    </motion.div>
  );
};

export default WhatAreWe;
