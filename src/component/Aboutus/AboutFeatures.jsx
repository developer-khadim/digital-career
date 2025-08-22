import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, BarChart, Code2, Rocket, Shield } from 'lucide-react';

const AboutFeatures = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Global Reach",
      description: "Operating in 15+ countries, we bring diverse perspectives and global best practices to every project."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Leaders",
      description: "Our leadership team includes industry veterans with 10+ years of experience in digital transformation."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Success Stories",
      description: "Over 300 successful client partnerships across various industries, from startups to enterprises."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Future-Ready",
      description: "We invest in emerging technologies and continuous learning to stay ahead of industry trends."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Growth Partners",
      description: "We don't just deliver projects; we partner in your growth journey with strategic insights."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Research & Development",
      description: "Dedicated R&D team exploring AI, blockchain, and other emerging technologies."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Friendly",
      description: "Special programs and flexible engagement models designed for startups and small businesses."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Award-winning agency recognized for excellence in digital innovation and client satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Digital Career Agency?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional digital solutions
            that help our clients succeed in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-secondary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
