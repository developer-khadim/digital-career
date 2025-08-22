import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    content: "Digital Career Agency delivered exceptional results for our web development project. Their team's expertise in React and Node.js helped us create a scalable solution that exceeded our expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateTech",
    content: "The mobile app developed by Digital Career Agency using Flutter was outstanding. Their attention to detail and commitment to quality really sets them apart from other agencies.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Media",
    content: "Their social media marketing strategies transformed our online presence. The team's creative approach and data-driven decisions helped us achieve remarkable growth.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    name: "David Kim",
    role: "Student",
    company: "University of Technology",
    content: "I received excellent support for my computer science assignments. The team helped me understand complex concepts and improve my coding skills significantly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Lisa Thompson",
    role: "Product Owner",
    company: "Digital First",
    content: "The AI solution provided by Digital Career Agency revolutionized our customer service. Their expertise in machine learning and data science is truly impressive.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "Future Systems",
    content: "Working with Digital Career Agency on our enterprise software project was a great experience. Their full-stack development team delivered high-quality code on time.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why companies and individuals trust Digital Career Agency for their digital needs.
          Read testimonials from our satisfied clients across various industries.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
