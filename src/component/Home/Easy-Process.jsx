// import React from 'react';
// import { LuMessageSquareReply } from 'react-icons/lu';
// import { TbAnalyze } from 'react-icons/tb';
// import { GiGearHammer, GiStairsGoal } from 'react-icons/gi';   // react-icons
// import process from '../../assets/process.svg';

// const steps = [
//   {
//     icon: <LuMessageSquareReply size={24} />,
//     title: 'You Ask',
//     text: 'Tell us your goal; we listen, clarify requirements, and scope the task.',
//   },
//   {
//     icon: <TbAnalyze size={24} />,
//     title: 'We Analyze',
//     text: 'We research, plan, and choose the right tools for the best outcome.',
//   },
//   {
//     icon: <GiGearHammer size={24} />,            // Build icon
//     title: 'We Build',
//     text: 'Our team designs, develops, and iterates rapidly with rigorous quality checks.',
//   },
//   {
//     icon: <GiStairsGoal size={24} />,            // Success icon
//     title: 'You Succeed',
//     text: 'Deliverables ship on time; results are tracked and support continues.',
//   },
// ];

// const EasyProcess = () => {
//   return (
//     <div className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 text-white">
//       <section className="text-gray-600 body-font">
//         <div className="  py-1 mx-auto items-center flex flex-col lg:flex-row gap-2 lg:gap-72">
//           {/* Timeline (left on desktop, full-width on mobile) */}
//           <div className="w-full lg:w-2/5">
//             {steps.map((step, idx) => (
//               <div key={idx} className="flex relative pb-10">
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
//                   <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
//                     {step.title}
//                   </h2>
//                   <p className="leading-relaxed text-gray-700">{step.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Image (right on desktop, full-width below timeline on mobile) */}
//           <img
//             className="w-full lg:w-2/5 rounded-lg object-cover container mx-auto"
//             src={process}
//             alt="Process illustration"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EasyProcess;
import React from 'react';
import { LuMessageSquareReply } from 'react-icons/lu';
import { TbAnalyze } from 'react-icons/tb';
import { GiGearHammer, GiStairsGoal } from 'react-icons/gi';   // react-icons
import process from '../../assets/process.svg';

const steps = [
  {
    icon: <LuMessageSquareReply size={24} />,
    title: 'You Ask',
    text: 'Tell us your goal; we listen, clarify requirements, and scope the task.',
  },
  {
    icon: <TbAnalyze size={24} />,
    title: 'We Analyze',
    text: 'We research, plan, and choose the right tools for the best outcome.',
  },
  {
    icon: <GiGearHammer size={24} />,            // Build icon
    title: 'We Build',
    text: 'Our team designs, develops, and iterates rapidly with rigorous quality checks.',
  },
  {
    icon: <GiStairsGoal size={24} />,            // Success icon
    title: 'You Succeed',
    text: 'Deliverables ship on time; results are tracked and support continues.',
  },
];

const EasyProcess = () => {
  return (
    <div className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 text-white">
      <section className="text-gray-600 body-font">
        <div className="py-1 mx-auto items-start flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
          {/* Timeline (left on desktop, full-width on mobile) */}
          <div className="w-full lg:w-1/2">
            {steps.map((step, idx) => (
              <div key={idx} className="flex relative pb-5 lg:pb-20">
                {/* vertical line */}
                {idx < steps.length - 1 && (
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                )}
                {/* icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                  {step.icon}
                </div>
                {/* content */}
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold title-font lg:text-[18px] text-[16px] text-gray-900 mb-1 tracking-wider">
                    {step.title}
                  </h2>
                  <p className="leading-relaxed text-gray-700">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Image (right on desktop, full-width below timeline on mobile) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
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