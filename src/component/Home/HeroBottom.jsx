// import React from "react";
// import cube1 from "../../assets/cube1.png";
// import cube2 from "../../assets/cube2.png";
// import cube3 from "../../assets/cube3.png";

// const HeroBottom = () => {
//   return (
//     <div className=" w-full px-3 py-3 sm:px-2 md:px-12 xl:px-40 lg:px-40 flex flex-col md:flex-row items-center bg-gradient-to-br from-primary/5 to-secondary/5 ">
//       <div className="flex justify-between gap-40 ">
//         <div className="flex  gap-2">
//           <img
//             src={cube1}
//             alt="cube"
//             className="w-16 h-16 bg-yellow-300 p-2 "
//           />
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[24px] font-semibold  text-primary ">
//               Architect your Solution
//             </h2>
//             <p className="text-[15px] text-primary ">
//               Our team in on your operational, technological, and strategic
//               challenges through an in-depth understanding of your business. We
//               design a strategic roadmap to guide your result-oriented goals.
//             </p>
//           </div>
//         </div>
//         <div className="flex  gap-2">
//           <img
//             src={cube2}
//             alt="cube"
//             className="w-16 h-16 bg-yellow-300 p-2 "
//           />
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[24px] font-semibold  text-primary ">
//               Engineer your Solution
//             </h2>
//             <p className="text-[15px] text-primary ">
//               We promptly put together your nearshore engineering dream team to
//               fulfill your specific requirements. We create the most elegant
//               solution for your difficulties by combining our deep tech
//               expertise, Top 1% Tech Talent, and industry-specific experience.
//             </p>
//           </div>
//         </div>
       
//         <div className="flex  gap-2">
//           <img
//             src={cube3}
//             alt="cube"
//             className="w-16 h-16 bg-yellow-300 p-2 "
//           />
//           <div className="flex flex-col gap-1">
//             <h2 className="text-[24px] font-semibold  text-primary ">
//               Engineer your Solution
//             </h2>
//             <p className="text-[15px] text-primary ">
//             Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
//             process places the foundation for a more efficient and strong business that can meet demands at scale.
//             </p>
//           </div>
//         </div>
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
    <div className="w-full px-3 py-8 sm:px-4 md:px-12 xl:px-40 lg:px-40 flex flex-col md:flex-row items-center bg-white">
      <div className="flex flex-col md:flex-row justify-between gap-12 w-full">
        
        {/* Architect Your Solution */}
        <div className="flex gap-3 max-w-md">
          <img
            src={cube1}
            alt="Architect Solution Icon"
            className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-semibold text-primary">
              Architect Your Solution
            </h2>
            <p className="text-[15px] text-primary leading-relaxed">
              We dive deep into your operational, technological, and strategic challenges 
              to truly understand your vision. Then, we design a clear, result-driven roadmap 
              that guides you toward sustainable growth and measurable success.
            </p>
          </div>
        </div>

        {/* Engineer Your Solution */}
        <div className="flex gap-3 max-w-md">
          <img
            src={cube2}
            alt="Engineer Solution Icon"
            className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-semibold text-primary">
              Engineer Your Solution
            </h2>
            <p className="text-[15px] text-primary leading-relaxed">
              We quickly assemble your elite development team, combining deep 
              tech expertise, top 1% talent, and industry-specific insights to 
              deliver elegant, high-performance solutions to your toughest challenges.
            </p>
          </div>
        </div>

        {/* Re-Engineer Your Business Process */}
        <div className="flex gap-3 max-w-md">
          <img
            src={cube3}
            alt="Re-Engineer Business Icon"
            className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-semibold text-primary">
              Re-Engineer Your Business Process
            </h2>
            <p className="text-[15px] text-primary leading-relaxed">
              With our support, your digital transformation accelerates—creating 
              efficient, scalable, and resilient processes that position your business 
              to meet growing demands and adapt to future opportunities with confidence.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroBottom;
