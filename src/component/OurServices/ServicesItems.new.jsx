import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Import service icons
import software from "../../assets/sotwareDevelopment.png";
import academic from "../../assets/Academic&Student.png";
import marketing from "../../assets/social-media-marketing-icon.png";
import design from "../../assets/art.png";
import ai from "../../assets/ai.png";
import database from "../../assets/database.png";
import devops from "../../assets/devops.png";
import project from "../../assets/project.png";

const services = [
  {
    icon: software,
    title: "Software Development",
    description: "End-to-end development solutions with modern technologies.",
    features: [
      "Full Stack Development",
      "Mobile App Development",
      "Custom Software Solutions",
      "API Integration"
    ],
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: academic,
    title: "Academic Support",
    description: "Comprehensive academic assistance for students and researchers.",
    features: [
      "Project Development",
      "Research & Thesis Support",
      "Technical Documentation",
      "Code Review & Debugging"
    ],
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    icon: marketing,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions for online growth.",
    features: [
      "Social Media Management",
      "Content Strategy",
      "SEO Optimization",
      "Analytics & Reporting"
    ],
    gradient: "bg-gradient-to-br from-orange-500 to-pink-600"
  },
  {
    icon: design,
    title: "Creative Services",
    description: "Professional design and creative solutions.",
    features: [
      "UI/UX Design",
      "Graphic Design",
      "Video Editing",
      "Brand Identity"
    ],
    gradient: "bg-gradient-to-br from-violet-500 to-purple-600"
  },
  {
    icon: ai,
    title: "AI & Machine Learning",
    description: "Advanced AI solutions for modern business needs.",
    features: [
      "ML Model Development",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ],
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    icon: database,
    title: "Database Solutions",
    description: "Robust database design and management services.",
    features: [
      "Database Architecture",
      "Data Migration",
      "Performance Optimization",
      "Security Implementation"
    ],
    gradient: "bg-gradient-to-br from-red-500 to-orange-600"
  },
  {
    icon: devops,
    title: "DevOps Services",
    description: "Streamline your development and deployment process.",
    features: [
      "CI/CD Pipeline Setup",
      "Cloud Infrastructure",
      "Container Orchestration",
      "Monitoring & Logging"
    ],
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    icon: project,
    title: "Project Management",
    description: "Professional project planning and execution.",
    features: [
      "Agile Methodology",
      "Resource Planning",
      "Risk Management",
      "Quality Assurance"
    ],
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600"
  }
];

const ServiceCard = ({ icon, title, description, features, gradient }) => {
  return (
    <motion.div
      className={`relative overflow-hidden group rounded-2xl p-6 ${gradient} shadow-lg hover:shadow-xl transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/90 text-sm mb-6">{description}</p>

      {/* Features */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-white/90" />
            <span className="text-white/90 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const ServicesItems = () => {
  return (
    <section className="w-full py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 bg-gray-50">
      {/* Services Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your goals with our comprehensive digital services.
        </p>
        <button className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold 
                         hover:bg-primary transition-colors duration-300 transform hover:-translate-y-1">
          Get Started
        </button>
      </motion.div>
    </section>
  );
};

export default ServicesItems;
