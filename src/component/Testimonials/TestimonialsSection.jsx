import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Project Manager",
    company: "PakTech Solutions",
    content: "Working with Digital Career Agency was a fantastic experience. Their team's dedication and technical expertise helped us achieve our project goals ahead of schedule.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Ali Raza",
    role: "Startup Founder",
    company: "InnoPak",
    content: "The team's understanding of modern technologies and ability to deliver quality solutions within budget made them our go-to development partner.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Fatima Ahmed",
    role: "Marketing Director",
    company: "GrowthHub Pakistan",
    content: "Their innovative approach to digital solutions and responsive communication style made our project implementation smooth and successful.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Hassan Malik",
    role: "Computer Science Student",
    company: "NUST",
    content: "As a fellow student, I appreciate their academic support services. They helped me understand complex concepts and improve my project work significantly.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=7"
  },
  {
    name: "Zara Sheikh",
    role: "Product Owner",
    company: "Digital Pakistan",
    content: "Their attention to detail and commitment to quality helped us launch our product successfully. Highly recommended for any digital project.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Omar Farooq",
    role: "CTO",
    company: "FutureTech Lahore",
    content: "The team's technical expertise and professional approach made our collaboration extremely productive. They delivered exactly what we needed.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=11"
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
