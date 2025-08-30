import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '../../component/OurServices/Hero';
import ServicesItems from '../../component/OurServices/ServicesItems';
import From from '../../component/From';

// Stats data
const stats = [
  { number: '10+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '4+', label: 'Expert Team Members' }
];

// Benefits data
const benefits = [
  "Expert Team of Professionals",
  "Cutting-edge Technologies",
  "Customized Solutions",
  "Fast Turnaround Time",
  "Competitive Pricing",
  "Quality Assurance"
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/services") {
      document.title = "Services | Digital Career Agency";
    } else {
      document.title = "Digital Career Agency";
    }
  }, [location]);

  return (
    <motion.div 
      className="select-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Services Grid */}
      <ServicesItems />

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-white">
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through our comprehensive range of services and dedicated team of experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-gray-50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-white/90 mb-8">
              Let's work together to bring your vision to life. Our team is ready to help you succeed.
            </p>
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold 
                           hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}

export default Services