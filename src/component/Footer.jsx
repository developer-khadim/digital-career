

// import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
// import React, { useEffect } from 'react';
// import { LiaFacebook, LiaLinkedin } from 'react-icons/lia';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//       offset: 50,
//     });
//   }, []);

//   return (
//     <>
//       <footer className=" overflow-x-hidden w-full bg-white dark:bg-secondary text-primary dark:text-white px-3 py-3 sm:px-2 md:px-12 xl:px-40 lg:px-40 border-t border-gray-200 dark:border-gray-700">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo & Info */}
//           <div 
//             className="flex flex-col gap-4 lg:col-span-1"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <div 
//               className="flex items-center gap-3"
//               data-aos="zoom-in"
//               data-aos-delay="200"
//             >
//               <img src="./dc.png" alt="Digital Career Agency Logo" className="w-12 h-12 object-contain" />
//               <span className="font-bold text-xl">Digital Career</span>
//             </div>
//             <p 
//               className="text-sm leading-relaxed max-w-xs"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               Expertly trained, battle-tested, elite software developers and tech professionals on demand. Your gateway to exceptional talent.
//             </p>
//             <div 
//               className="space-y-2"
//               data-aos="fade-up"
//               data-aos-delay="400"
//             >
//               <a 
//                 href="tel:+923499999999" 
//                 className="flex items-center gap-2 text-sm hover:text-third transition-colors"
//                 data-aos="slide-right"
//                 data-aos-delay="500"
//               >
//                 <PhoneIcon size={16} className="text-third" /> +92 349-xxxxxxx
//               </a>
//               <a 
//                 href="mailto:hello@digitalcareer.co" 
//                 className="flex items-center gap-2 text-sm hover:text-third transition-colors"
//                 data-aos="slide-right"
//                 data-aos-delay="600"
//               >
//                 <MailIcon size={16} className="text-third" /> hello@digitalcareer.co
//               </a>
//               <div 
//                 className="flex items-center gap-2 text-sm"
//                 data-aos="slide-right"
//                 data-aos-delay="700"
//               >
//                 <MapPin size={16} className="text-third" /> Karachi, Pakistan
//               </div>
//             </div>
//           </div>

//           {/* Company Links */}
//           <div 
//             className="flex flex-col gap-3"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <h3 
//               className="font-bold text-lg mb-2"
//               data-aos="fade-down"
//               data-aos-delay="300"
//             >
//               Company
//             </h3>
//             <nav className="flex flex-col gap-2">
//               <a 
//                 href="/about" 
//                 className="text-sm hover:text-third transition-colors duration-200"
//                 data-aos="fade-left"
//                 data-aos-delay="400"
//               >
//                 About Us
//               </a>
//               <a 
//                 href="/success-stories" 
//                 className="text-sm hover:text-third transition-colors duration-200"
//                 data-aos="fade-left"
//                 data-aos-delay="450"
//               >
//                 Success Stories
//               </a>
//               <a 
//                 href="/careers" 
//                 className="text-sm hover:text-third transition-colors duration-200"
//                 data-aos="fade-left"
//                 data-aos-delay="500"
//               >
//                 Careers
//               </a>
//               <a 
//                 href="/blog" 
//                 className="text-sm hover:text-third transition-colors duration-200"
//                 data-aos="fade-left"
//                 data-aos-delay="550"
//               >
//                 Blog
//               </a>
//               <a 
//                 href="/contact" 
//                 className="text-sm hover:text-third transition-colors duration-200"
//                 data-aos="fade-left"
//                 data-aos-delay="600"
//               >
//                 Contact Us
//               </a>
//             </nav>
//           </div>

//           {/* Creators Section */}
//           <div 
//             className="flex flex-col gap-3"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <h3 
//               className="font-bold text-lg mb-2"
//               data-aos="fade-down"
//               data-aos-delay="400"
//             >
//               Creators
//             </h3>
//             <p 
//               className="text-sm text-gray-600 dark:text-gray-400"
//               data-aos="fade-right"
//               data-aos-delay="500"
//             >
//               Want to join us as a creator? Apply on our website and start your journey with Digital Career.
//             </p>
//             <a 
//               href="/apply" 
//               className="text-sm font-medium text-third hover:underline"
//               data-aos="slide-up"
//               data-aos-delay="600"
//             >
//               Apply Now →
//             </a>
//           </div>

//           {/* Stay Updated & Queries */}
//           <div 
//             className="flex flex-col gap-6"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <div className="flex flex-col gap-3">
//               <h4 
//                 className="font-semibold"
//                 data-aos="fade-down"
//                 data-aos-delay="500"
//               >
//                 Stay Updated
//               </h4>
//               <p 
//                 className="text-xs text-gray-600 dark:text-gray-400"
//                 data-aos="fade-left"
//                 data-aos-delay="600"
//               >
//                 Get tech career insights & opportunities
//               </p>
//               <div 
//                 className="flex gap-2"
//                 data-aos="zoom-in"
//                 data-aos-delay="700"
//               >
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent bg-white dark:bg-gray-800"
//                 />
//                 <button className="px-4 py-2 bg-third text-white rounded hover:opacity-90 transition-opacity text-xs font-medium">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Queries Section */}
//             <div 
//               className="flex flex-col gap-2 text-sm"
//               data-aos="fade-up"
//               data-aos-delay="800"
//             >
//               <h4 className="font-semibold">For any queries</h4>
//               <p className="text-xs text-gray-600 dark:text-gray-400">Feel free to reach us:</p>
//               <a 
//                 href="mailto:hello@digitalcareer.co" 
//                 className="flex items-center gap-2 hover:text-third transition-colors"
//                 data-aos="slide-right"
//                 data-aos-delay="900"
//               > digitalcareerIT@gmail.com
//               </a>
//             </div>

//             {/* Social Media inside Stay Updated */}
//             <div 
//               className="flex items-center gap-3 mt-2"
//               data-aos="fade-up"
//               data-aos-delay="1000"
//             >
//               <a 
//                 href="mailto:digitalcareerIT@gmail.com" 
//                 className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
//                 data-aos="zoom-in"
//                 data-aos-delay="1100"
//               >
//                 <MailIcon size={24} className="text-third" />
//               </a>
//               <a 
//                 href="http://www.linkedin.com/in/digital-career-agency-76a00537b" 
//                 className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
//                 aria-label="LinkedIn"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 data-aos="zoom-in"
//                 data-aos-delay="1200"
//               >
//                 <LiaLinkedin size={30} />
//               </a>
              
//               <a 
//                 href="https://www.facebook.com/profile.php?id=61579067426818" 
//                 className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
//                 aria-label="Facebook"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 data-aos="zoom-in"
//                 data-aos-delay="1300"
//               >
//                 <LiaFacebook size={30} />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr 
//           className="my-8 border-gray-300 dark:border-gray-600"
//           data-aos="fade-in"
//           data-aos-delay="500"
//         />

//         {/* Bottom Section */}
//         <div 
//           className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
//           data-aos="fade-up"
//           data-aos-delay="600"
//         >
//           <span 
//             data-aos="slide-right"
//             data-aos-delay="700"
//           >
//             © {new Date().getFullYear()} Digital Career Agency. All Rights Reserved.
//           </span>
//           <div 
//             className="flex gap-4"
//             data-aos="slide-left"
//             data-aos-delay="800"
//           >
//             <a href="/privacy" className="hover:text-third transition-colors text-xs">Privacy Policy</a>
//             <a href="/terms" className="hover:text-third transition-colors text-xs">Terms & Conditions</a>
//             <a href="/cookies" className="hover:text-third transition-colors text-xs">Cookie Policy</a>
//           </div>
//         </div>

//         {/* Trust Indicators */}
//         <div 
//           className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
//           data-aos="fade-up"
//           data-aos-delay="900"
//         >
//           <div 
//             className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400"
//             data-aos="zoom-in"
//             data-aos-delay="1000"
//           >
//             <span className="flex items-center gap-1">✓ 500+ Happy Clients</span>
//             <span className="flex items-center gap-1">✓ 99.9% Uptime SLA</span>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import React from 'react';
import { LiaFacebook, LiaLinkedin } from 'react-icons/lia';
import { motion } from 'framer-motion';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  })
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay }
  })
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay }
  })
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay }
  })
};

const Footer = () => {
  return (
    <footer className="overflow-x-hidden w-full bg-white dark:bg-secondary text-primary dark:text-white px-3 py-3 sm:px-2 md:px-12 xl:px-40 lg:px-40 border-t border-gray-200 dark:border-gray-700">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Info */}
        <motion.div 
          className="flex flex-col gap-4 lg:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.2}
        >
          <motion.div 
            className="flex items-center gap-3"
            variants={zoomIn}
            custom={0.3}
          >
            <img src="./dc.png" alt="Digital Career Agency Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-xl">Digital Career</span>
          </motion.div>

          <motion.p 
            className="text-sm leading-relaxed max-w-xs"
            variants={fadeUp}
            custom={0.4}
          >
            Expertly trained, battle-tested, elite software developers and tech professionals on demand. Your gateway to exceptional talent.
          </motion.p>

          <div className="space-y-2">
            <motion.a 
              href="tel:+923499999999" 
              className="flex items-center gap-2 text-sm hover:text-third transition-colors"
              variants={slideRight}
              custom={0.5}
            >
              <PhoneIcon size={16} className="text-third" /> +92 349-xxxxxxx
            </motion.a>

            <motion.a 
              href="mailto:digitalcareerIT@gmail.com" 
              className="flex items-center gap-2 text-sm hover:text-third transition-colors"
              variants={slideRight}
              custom={0.6}
            >
              <MailIcon size={16} className="text-third" />digitalcareerIT@gmail.com
            </motion.a>

            <motion.div 
              className="flex items-center gap-2 text-sm"
              variants={slideRight}
              custom={0.7}
            >
              <MapPin size={16} className="text-third" /> Karachi, Pakistan
            </motion.div>
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.div 
          className="flex flex-col gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.3}
        >
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <nav className="flex flex-col gap-2">
            {["About Us","Success Stories","Careers","Blog","Contact Us"].map((link, i) => (
              <motion.a
                key={i}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm hover:text-third transition-colors duration-200"
                variants={slideLeft}
                custom={0.4 + i * 0.1}
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Creators Section */}
        <motion.div 
          className="flex flex-col gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.4}
        >
          <h3 className="font-bold text-lg mb-2">Creators</h3>    
          <motion.p 
            className="text-sm text-gray-600 dark:text-gray-400"
            variants={slideRight}
            custom={0.5}
          >
            Want to join us as a creator? Apply on our website and start your journey with Digital Career.
          </motion.p>
          <motion.a 
            href="/apply" 
            className="text-sm font-medium text-third hover:underline"
            variants={fadeUp}
            custom={0.6}
          >
            Apply Now →
          </motion.a>
        </motion.div>

        {/* Stay Updated */}
        <motion.div 
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.5}
        >
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Stay Updated</h4>
            <motion.p 
              className="text-xs text-gray-600 dark:text-gray-400"
              variants={slideLeft}
              custom={0.6}
            >
              Get tech career insights & opportunities
            </motion.p>
            <motion.div 
              className="flex gap-2"
              variants={zoomIn}
              custom={0.7}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent bg-white dark:bg-gray-800"
              />
              <button className="px-4 py-2 bg-third text-white rounded hover:opacity-90 transition-opacity text-xs font-medium">
                Subscribe
              </button>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div 
            className="flex items-center gap-3 mt-2"
            variants={fadeUp}
            custom={0.8}
          >
            <a href="mailto:digitalcareerIT@gmail.com" className="hover:text-third transition-colors duration-200 hover:scale-110 transform">
              <MailIcon size={24} className="text-third" />
            </a>
            <a href="http://www.linkedin.com/in/digital-career-agency-76a00537b" target="_blank" rel="noopener noreferrer" className="hover:text-third transition-colors duration-200 hover:scale-110 transform">
              <LiaLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579067426818" target="_blank" rel="noopener noreferrer" className="hover:text-third transition-colors duration-200 hover:scale-110 transform">
              <LiaFacebook size={30} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr 
        className="my-8 border-gray-300 dark:border-gray-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.6}
      />

      {/* Bottom Section */}
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.7}
      >
        <span>© {new Date().getFullYear()} Digital Career Agency. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-third transition-colors text-xs">Privacy Policy</a>
          <a href="/terms" className="hover:text-third transition-colors text-xs">Terms & Conditions</a>
          <a href="/cookies" className="hover:text-third transition-colors text-xs">Cookie Policy</a>
        </div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div 
        className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0.8}
      >
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400"
          variants={zoomIn}
          custom={0.9}
        >
          <span className="flex items-center gap-1">✓ 500+ Happy Clients</span>
          <span className="flex items-center gap-1">✓ 99.9% Uptime SLA</span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
