import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import teamwork from '../../assets/photo.png';

const AboutHistory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={teamwork} 
                alt="Our Journey" 
                className="w-full h-auto rounded-2xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary">10+</h4>
                  <p className="text-sm text-gray-600">Expert Developers</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary">50+</h4>
                  <p className="text-sm text-gray-600">Projects Started</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary">100%</h4>
                  <p className="text-sm text-gray-600">Client Focus</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story: Innovation Starts Here
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2025, Digital Career Agency emerged from a vision to revolutionize the digital 
              solutions landscape. As a dynamic startup, we bring fresh perspectives and innovative 
              approaches to help businesses and individuals thrive in the digital age. Our commitment 
              to excellence and cutting-edge technology sets us apart in the industry.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </span>
                <p className="text-gray-600">
                  <strong className="text-primary">Innovative Solutions:</strong> Specializing in modern web development, mobile apps, and digital marketing
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </span>
                <p className="text-gray-600">
                  <strong className="text-primary">Expert Team:</strong> Passionate professionals with expertise in latest technologies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </span>
                <p className="text-gray-600">
                  <strong className="text-primary">Future Vision:</strong> Committed to expanding our reach and impact globally
                </p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-primary transition-colors duration-300">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
