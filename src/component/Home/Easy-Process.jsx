// import React from "react";
// import { LuMessageSquareReply } from "react-icons/lu";
// import { TbAnalyze } from "react-icons/tb";
// import { GiGearHammer, GiStairsGoal } from "react-icons/gi"; // react-icons
// import process from "../../assets/process.svg";

// const steps = [
//   {
//     icon: <LuMessageSquareReply size={24} />,
//     title: "You Ask",
//     text: "Tell us your goal; we listen, clarify requirements, and scope the task.",
//   },
//   {
//     icon: <TbAnalyze size={24} />,
//     title: "We Analyze",
//     text: "We research, plan, and choose the right tools for the best outcome.",
//   },
//   {
//     icon: <GiGearHammer size={24} />, // Build icon
//     title: "We Build",
//     text: "Our team designs, develops, and iterates rapidly with rigorous quality checks.",
//   },
//   {
//     icon: <GiStairsGoal size={24} />, // Success icon
//     title: "You Succeed",
//     text: "Deliverables ship on time; results are tracked and support continues.",
//   },
// ];

// const EasyProcess = () => {
//   return (
//     <div className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 text-white">
//       <section className="text-primary body-font">
//         <h2 className="text-sm font-semibold tracking-tight text-brand-900 ">
//           How to start
//         </h2>
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6 max-w-lg md:text-left">
//           From Idea to Product, Seamlessly
//         </h1>

//         <div className="py-1 mx-auto flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
//           {/* Timeline (left on desktop, full-width on mobile) */}
//           <div className="w-full lg:w-1/2">
//             {steps.map((step, idx) => (
//               <div key={idx} className="flex relative pb-5 lg:pb-20">
//                 {/* vertical line */}
//                 {idx < steps.length - 1 && (
//                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                     <div className="h-full w-1 bg-gray-200 pointer-events-none" />
//                   </div>
//                 )}
//                 {/* icon */}
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
//                   {step.icon}
//                 </div>
//                 {/* content */}
//                 <div className="flex-grow pl-4">
//                   <h2 className="font-semibold title-font lg:text-[18px] text-[16px] text-gray-900 mb-1 tracking-wider">
//                     {step.title}
//                   </h2>
//                   <p className="leading-relaxed text-gray-700">{step.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* Image (right on desktop, full-width below timeline on mobile) */}
//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
//             <img
//               className="w-full max-w-md lg:max-w-none rounded-lg object-cover"
//               src={process}
//               alt="Process illustration"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EasyProcess;


import React, { useEffect } from "react";
import { LuMessageSquareReply } from "react-icons/lu";
import { TbAnalyze } from "react-icons/tb";
import { GiGearHammer, GiStairsGoal } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import process from "../../assets/process.svg";

const steps = [
  {
    icon: <LuMessageSquareReply size={24} />,
    title: "You Ask",
    text: "Tell us your goal; we listen, clarify requirements, and scope the task.",
  },
  {
    icon: <TbAnalyze size={24} />,
    title: "We Analyze",
    text: "We research, plan, and choose the right tools for the best outcome.",
  },
  {
    icon: <GiGearHammer size={24} />,
    title: "We Build",
    text: "Our team designs, develops, and iterates rapidly with rigorous quality checks.",
  },
  {
    icon: <GiStairsGoal size={24} />,
    title: "You Succeed",
    text: "Deliverables ship on time; results are tracked and support continues.",
  },
];

const EasyProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 text-white">
      <section className="text-primary body-font">
        <h2 
          className="text-sm font-semibold tracking-tight text-brand-900"
          data-aos="fade-up"
        >
          How to start
        </h2>
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-10 pt-6 max-w-lg md:text-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          From Idea to Product, Seamlessly
        </h1>

        <div className="py-1 mx-auto flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
          {/* Timeline (left on desktop, full-width on mobile) */}
          <div className="w-full lg:w-1/2">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex relative pb-5 lg:pb-20"
                data-aos="fade-right"
                data-aos-delay={200 + (idx * 100)}
              >
                {/* vertical line */}
                {idx < steps.length - 1 && (
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div 
                      className="h-full w-1 bg-gray-200 pointer-events-none"
                      data-aos="fade-in"
                      data-aos-delay={250 + (idx * 100)}
                    />
                  </div>
                )}
                {/* icon */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10"
                  data-aos="zoom-in"
                  data-aos-delay={300 + (idx * 100)}
                >
                  {step.icon}
                </div>
                {/* content */}
                <div 
                  className="flex-grow pl-4"
                  data-aos="fade-left"
                  data-aos-delay={350 + (idx * 100)}
                >
                  <h2 className="font-semibold title-font lg:text-[18px] text-[16px] text-gray-900 mb-1 tracking-wider">
                    {step.title}
                  </h2>
                  <p className="leading-relaxed text-gray-700">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Image (right on desktop, full-width below timeline on mobile) */}
          <div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              className="w-full max-w-md lg:max-w-none rounded-lg object-cover"
              src={process}
              alt="Process illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EasyProcess;