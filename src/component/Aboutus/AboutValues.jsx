import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Brain, Rocket } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Empowering Growth",
      description: "Our mission is to empower individuals and businesses to achieve their full potential in the digital age."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Social Impact",
      description: "We believe in using technology to create positive social impact and support educational initiatives."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Knowledge Sharing",
      description: "We actively contribute to the tech community through workshops, mentoring, and open-source projects."
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Sustainable Future",
      description: "Committed to sustainable practices in technology and business operations for a better tomorrow."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide our work and shape our commitment to delivering 
            exceptional digital solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
