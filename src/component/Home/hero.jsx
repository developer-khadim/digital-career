
import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import {
  ArrowRight,
  Code,
  Palette,
  BookOpen,
  MessageSquare,
} from "lucide-react";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="w-full min-h-[90vh] px-4 py-6 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 flex flex-col lg:flex-row items-center bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ---------- CONTENT SECTION ---------- */}
      <motion.div
        className="
          w-full
          lg:w-[55%]
          bg-white
          min-h-[500px] lg:h-[540px]
          flex flex-col justify-center
          gap-4 lg:gap-7
          pr-2 xs:pr-5 sm:pr-6 lg:pr-12
          rounded-tr-[50px] lg:rounded-tr-[100px]
          z-10
          order-2 lg:order-1
        "
        variants={fadeInFromRight}
      >
        {/* Main Heading */}
        <motion.h1
          className="
            text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-primary leading-tight
            mt-5 sm:mt-0 w-full sm:w-[600px]
          "
          variants={fadeInFromRight}
          transition={{ delay: 0.2 }}
        >
          Your Digital <span className="text-secondary">Success</span> Partner
        </motion.h1>

        {/* Description */}
        <motion.p
          className="
            w-full lg:w-[80%]
            text-[16px] sm:text-[18px] md:text-[20px]
            text-primary leading-relaxed
          "
          variants={fadeInFromRight}
          transition={{ delay: 0.4 }}
        >
          Professional digital services for students, entrepreneurs, and
          businesses. From Flutter development to AI projects, social media
          marketing to academic support - we deliver reliable, affordable, and
          high-quality solutions.
        </motion.p>

        {/* Service Highlights */}
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 gap-3 lg:gap-4 mt-2 lg:mt-4"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex items-center gap-2 text-xs sm:text-sm"
            variants={staggerItem}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Code className="text-secondary flex-shrink-0" size={16} />
            <span>Flutter & Full-Stack</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-xs sm:text-sm"
            variants={staggerItem}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Palette className="text-secondary flex-shrink-0" size={16} />
            <span>Design & Marketing</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-xs sm:text-sm"
            variants={staggerItem}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <BookOpen className="text-secondary flex-shrink-0" size={16} />
            <span>Academic Support</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-xs sm:text-sm"
            variants={staggerItem}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <MessageSquare className="text-secondary flex-shrink-0" size={16} />
            <span>AI & Research</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-2
                px-4 sm:px-6 py-3
                font-semibold rounded-md
                bg-secondary text-white
                border-2 border-secondary
                hover:bg-transparent hover:text-primary hover:border-primary
                transform transition-all duration-300
                text-sm sm:text-base
              "
              whileHover={{ 
                backgroundColor: "transparent",
                color: "var(--primary)",
                borderColor: "var(--primary)"
              }}
            >
              Explore Services <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
          </motion.a>

          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-2
                px-4 sm:px-6 py-3
                font-semibold rounded-md
                border-2 border-primary text-primary
                hover:bg-primary hover:text-white
                transform transition-all duration-300
                text-sm sm:text-base
              "
              whileHover={{ 
                backgroundColor: "var(--primary)",
                color: "white"
              }}
            >
              Get Started
            </motion.button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ---------- IMAGE SECTION ---------- */}
      <motion.div
        className="overflow-hidden
          w-full lg:w-[65%]
          -mt-6 lg:mt-0 xl:-ml-52
          flex justify-center lg:justify-start
          order-1 lg:order-2
        "
        variants={fadeInFromLeft}
        transition={{ delay: 0.3 }}
      >
        <motion.img
          src={hero}
          alt="Digital Career Agency Services"
          className="
            w-full
            max-w-[800px] lg:max-w-none
            xs:max-w-[440px] sm:max-w-[520px] md:max-w-full md:h-[300px]
            lg:w-[400px] lg:h-[600px] xl:w-full xl:h-auto
            h-auto object-cover
            rounded-bl-[140px]
            lg:rounded-bl-none
          "
          variants={scaleUp}
          transition={{ delay: 0.5 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;