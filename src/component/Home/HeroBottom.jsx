
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import cube1 from "../../assets/cube1.png";
// import cube2 from "../../assets/cube2.png";
// import cube3 from "../../assets/cube3.png";

// const HeroBottom = () => {
//   useEffect(() => {
//     AOS.init({ duration: 700, once: true });
//   }, []);

//   return (
//     <div className="w-full px-3 py-8 sm:px-4 md:px-12 lg:px-40 xl:px-40 2xl:px-40 flex flex-col bg-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
//         {/* ——— same three cards ——— */}
//         {[cube1, cube2, cube3].map((img, idx) => (
//           <div
//             key={idx}
//             className="flex gap-3 max-w-md"
//             data-aos="fade-up"
//             data-aos-delay={idx * 150}
//           >
//             <img
//               src={img}
//               alt=""
//               className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md flex-shrink-0"
//             />
//             <div className="flex flex-col gap-1">
//               <h2 className="text-[20px] md:text-[24px] font-semibold text-primary">
//                 {idx === 0 && "Architect Your Solution"}
//                 {idx === 1 && "Engineer Your Solution"}
//                 {idx === 2 && "Re-Engineer Your Business Process"}
//               </h2>
//               <p className="text-[14px] text-primary leading-relaxed">
//                 {idx === 0 &&
//                   "We dive deep into your operational, technological, and strategic challenges to truly understand your vision. Then, we design a clear, result-driven roadmap that guides you toward sustainable growth and measurable success."}
//                 {idx === 1 &&
//                   "We quickly assemble your elite development team, combining deep tech expertise, top 1% talent, and industry-specific insights to deliver elegant, high-performance solutions to your toughest challenges."}
//                 {idx === 2 &&
//                   "With our support, your digital transformation accelerates—creating efficient, scalable, and resilient processes that position your business to meet growing demands and adapt to future opportunities with confidence."}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroBottom;


// import React from "react";
// import { motion } from "framer-motion";

// import cube1 from "../../assets/cube1.png";
// import cube2 from "../../assets/cube2.png";
// import cube3 from "../../assets/cube3.png";

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: i * 0.2, // stagger effect
//       ease: "easeOut",
//     },
//   }),
// };

// const HeroBottom = () => {
//   return (
//     <div className="w-full px-3 py-8 sm:px-4 md:px-12 lg:px-40 xl:px-40 2xl:px-40 flex flex-col bg-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
//         {[cube1, cube2, cube3].map((img, idx) => (
//           <motion.div
//             key={idx}
//             className="flex gap-3 max-w-md"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             custom={idx} // pass index for stagger delay
//           >
//             <img
//               src={img}
//               alt=""
//               className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md flex-shrink-0"
//             />
//             <div className="flex flex-col gap-1">
//               <h2 className="text-[20px] md:text-[24px] font-semibold text-primary">
//                 {idx === 0 && "Architect Your Solution"}
//                 {idx === 1 && "Engineer Your Solution"}
//                 {idx === 2 && "Re-Engineer Your Business Process"}
//               </h2>
//               <p className="text-[14px] text-primary leading-relaxed">
//                 {idx === 0 &&
//                   "We dive deep into your operational, technological, and strategic challenges to truly understand your vision. Then, we design a clear, result-driven roadmap that guides you toward sustainable growth and measurable success."}
//                 {idx === 1 &&
//                   "We quickly assemble your elite development team, combining deep tech expertise, top 1% talent, and industry-specific insights to deliver elegant, high-performance solutions to your toughest challenges."}
//                 {idx === 2 &&
//                   "With our support, your digital transformation accelerates—creating efficient, scalable, and resilient processes that position your business to meet growing demands and adapt to future opportunities with confidence."}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroBottom;


import React from "react";

import cube1 from "../../assets/cube1.png";
import cube2 from "../../assets/cube2.png";
import cube3 from "../../assets/cube3.png";

const HeroBottom = () => {
  return (
    <div className="w-full px-3 py-8 sm:px-4 md:px-12 lg:px-40 xl:px-40 2xl:px-40 flex flex-col bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {[cube1, cube2, cube3].map((img, idx) => (
          <div key={idx} className="flex gap-3 max-w-md">
            <img
              src={img}
              alt=""
              className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md flex-shrink-0"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] md:text-[24px] font-semibold text-primary">
                {idx === 0 && "Architect Your Solution"}
                {idx === 1 && "Engineer Your Solution"}
                {idx === 2 && "Re-Engineer Your Business Process"}
              </h2>
              <p className="text-[14px] text-primary leading-relaxed">
                {idx === 0 &&
                  "We dive deep into your operational, technological, and strategic challenges to truly understand your vision. Then, we design a clear, result-driven roadmap that guides you toward sustainable growth and measurable success."}
                {idx === 1 &&
                  "We quickly assemble your elite development team, combining deep tech expertise, top 1% talent, and industry-specific insights to deliver elegant, high-performance solutions to your toughest challenges."}
                {idx === 2 &&
                  "With our support, your digital transformation accelerates—creating efficient, scalable, and resilient processes that position your business to meet growing demands and adapt to future opportunities with confidence."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBottom;
