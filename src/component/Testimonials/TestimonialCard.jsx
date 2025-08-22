import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, company, content, rating, image }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-secondary text-sm">{company}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard;
