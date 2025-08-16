import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to:'/' , label:'Home' },
    { to: '/what-are-we', label: 'What Are We' },
    { to: '/services', label: 'Services' },
    { to: '/technologies', label: 'Technologies' },
    { to: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <header className="backdrop-blur-lg bg-white/90 shadow-lg sticky top-0 z-[9999] border-b border-gray-200/50 transition-all duration-300 w-full h-16">
      <div className="flex items-center justify-between w-full h-full px-4 py-3 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/dc.png" alt="logo" className="w-9" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100/60 transition-colors lg:px-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-4">
          <Link to="#">
            <button className="flex items-center gap-1 lg:gap-2 text-primary border-2 border-primary px-2 py-1 lg:px-3 text-xs lg:text-sm font-semibold rounded-md transform hover:bg-secondary hover:text-white hover:border-secondary duration-300">
            Career <ArrowRight size={16} className="lg:w-5 lg:h-5" />
            </button>
          </Link>
          <Link to="/contact">
            <button className="text-secondary font-semibold text-sm lg:text-base transform hover:-translate-y-0.5 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition bg-white border-2 border-gray-300 shadow-sm"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <IoCloseSharp size={28} className="text-gray-700" />
            ) : (
              <RiMenu4Fill size={28} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
             {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black md:hidden z-[9998]"
                onClick={toggleMenu}
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-screen w-full bg-white shadow-2xl lg:hidden z-[9999] overflow-y-auto"
              >                                                                                                       {/* Header */}
                 <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-white w-full">
                   <div className="flex items-center space-x-3">
                     <img src="/dc.png" alt="logo" className="w-8 h-8" />
                     <h2 className="text-xl font-semibold text-gray-800">
                       Menu
                     </h2>
                   </div>
                   <button
                     onClick={toggleMenu}
                     className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100 transition bg-gray-50 border border-gray-200"
                   >
                     <IoCloseSharp size={28} className="text-gray-700" />
                   </button>
                 </div>
                {/* Links */}
               <nav className="p-6 space-y-3 w-full">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-6 py-4 rounded-lg text-xl  text-primary "
                    >
                      {link.label}
                    </Link>
                  ))}
                {/* CTA */}
                 <div className="mt-8 pt-6 px-6">
                   <Link to="/contact" onClick={() => setIsOpen(false)}>
                     <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-lg font-semibold">
                       Contact Us
                     </button>
                   </Link>
                 </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
