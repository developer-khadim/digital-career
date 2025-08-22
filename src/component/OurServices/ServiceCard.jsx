import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, features, gradient }) => {
  return (
    <motion.div
      className={`relative group rounded-2xl p-6 md:p-8 ${gradient} shadow-lg hover:shadow-xl transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/90 mb-6 text-sm md:text-base">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-white/80 text-sm">
            <span className="mt-1">•</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button className="w-full py-3 px-6 bg-white/90 backdrop-blur-sm text-primary rounded-lg font-semibold 
                       flex items-center justify-center gap-2 group-hover:bg-white transition-colors">
        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;
