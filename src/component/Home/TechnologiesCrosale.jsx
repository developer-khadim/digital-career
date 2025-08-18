// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Import images properly
// import reactLogo from "../../assets/react.png";
// import angularLogo from "../../assets/angular-loho.png";
// import nextLogo from "../../assets/next.png";
// import nodeLogo from "../../assets/node.png";

// /* -------------------------------------------------
//    Import 2× (HD) logos so they stay crisp on retina
//    -------------------------------------------------*/

// const techLogos = [
//   { src: reactLogo,   alt: 'React'   },
//   { src: angularLogo, alt: 'Angular' },
//   { src: nextLogo,    alt: 'Next.js' },
//   { src: nodeLogo,    alt: 'Node.js' },
// ];

// /* -------------------------------------------------
//    How many logos to show per breakpoint
//    -------------------------------------------------*/
// const getVisibleCount = () => {
//   if (typeof window === 'undefined') return 1 ; // SSR
//   if (window.innerWidth >= 1024) return 4;
//   if (window.innerWidth >= 768)  return 1;
//   return 1;
// };

// export default function TechnologiesCarousel() {
//   const [current, setCurrent]       = useState(0);
//   const [visibleCount, setVisible]  = useState(getVisibleCount());

//   /* Keep track of viewport changes */
//   useEffect(() => {
//     const onResize = () => setVisible(getVisibleCount());
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   const maxIndex = techLogos.length - visibleCount;

//   const prevSlide = () =>
//     setCurrent((c) => (c === 0 ? 0 : c - 1));

//   const nextSlide = () =>
//     setCurrent((c) => (c === maxIndex ? maxIndex : c + 1));

//   /* Offset for sliding track */
//   const translateX = -(current * (100 / visibleCount));

//   return (
//     <section className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 bg-transparent">
//       {/* Heading */}
//       <div className="pb-6 text-center">
//         <h2 className="text-sm font-semibold tracking-tight text-primary">
//           Specialized
//         </h2>
//         <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6">
//           Technologies
//         </h1>
//       </div>

//       <div className="relative w-full">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           disabled={current === 0}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white disabled:opacity-30 transition"
//         >
//           <ChevronLeft size={28} />
//         </button>

//         {/* Viewport that masks the sliding track */}
//         <div className="overflow-hidden px-12">
//           <div
//             className="flex transition-transform duration-500 ease-in-out gap-0 md:gap-8 lg:gap-12"
//             style={{ transform: `translateX(${translateX}%)` }}
//           >
//             {techLogos.map((logo, idx) => (
//               <div
//                 key={idx}
//                 className="flex-shrink-0 flex justify-center items-center"
//                 /* Each slide takes 1/visibleCount of the track */
//                 style={{ flexBasis: `${100 / visibleCount}%` }}
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="h-10 sm:h-10 md:h-16 w-auto object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           disabled={current === maxIndex}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white disabled:opacity-30 transition"
//         >
//           <ChevronRight size={28} />
//         </button>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images properly
import reactLogo from "../../assets/react.png";
import angularLogo from "../../assets/angular-loho.png";
import nextLogo from "../../assets/next.png";
import nodeLogo from "../../assets/node.png";

const techLogos = [
  { src: reactLogo,   alt: 'React'   },
  { src: angularLogo, alt: 'Angular' },
  { src: nextLogo,    alt: 'Next.js' },
  { src: nodeLogo,    alt: 'Node.js' },
];

/* ----------------------------------------------
   How many logos to show per breakpoint
---------------------------------------------- */
const getVisibleCount = () => {
  if (typeof window === 'undefined') return 1; // SSR safe
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 768)  return 2;
  return 1;
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function TechnologiesCarousel() {
  const [current, setCurrent]       = useState(0);
  const [visibleCount, setVisible]  = useState(getVisibleCount());

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = techLogos.length - visibleCount;
  const prevSlide = () => setCurrent((c) => (c === 0 ? 0 : c - 1));
  const nextSlide = () => setCurrent((c) => (c === maxIndex ? maxIndex : c + 1));

  const translateX = -(current * (100 / visibleCount));

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 bg-transparent">
      {/* Heading */}
      <div className="pb-6 text-center">
        <motion.h2
          className="text-sm font-semibold tracking-tight text-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Specialized
        </motion.h2>
        <motion.h1
          className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Technologies
        </motion.h1>
      </div>

      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white disabled:opacity-30 transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden px-12">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-0 md:gap-8 lg:gap-12"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {techLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ flexBasis: `${100 / visibleCount}%` }}
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-10 md:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={current === maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white disabled:opacity-30 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
