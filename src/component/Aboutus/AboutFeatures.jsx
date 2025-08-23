import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap, BarChart, Code2, Rocket, Shield } from 'lucide-react';

const AboutFeatures = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fresh Perspective",
      description: "As computer science students, we bring fresh ideas and modern approaches to every project."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Currently pursuing Computer Science with hands-on experience in latest technologies and frameworks."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Client Success",
      description: "Successfully delivered projects for 4+ clients, maintaining high standards and client satisfaction."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Up-to-Date Skills",
      description: "Actively learning and applying the latest programming languages and development tools."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Affordable Solutions",
      description: "Competitive pricing with flexible options, perfect for small businesses and startups."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Technical Background",
      description: "Strong foundation in computer science principles and modern development practices."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Passionate Team",
      description: "Young, energetic team dedicated to delivering quality solutions and exceeding expectations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Academic Projects",
      description: "Experience from various university projects and real-world client work combined."
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
            Why Work With Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As Computer Science students with real-world project experience, we combine academic knowledge 
            with practical skills to deliver modern, cost-effective solutions for your digital needs.
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
