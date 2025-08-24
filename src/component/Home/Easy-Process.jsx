//  import React from "react";
// import { LuMessageSquareReply } from "react-icons/lu";
// import { TbAnalyze } from "react-icons/tb";
// import { GiGearHammer, GiStairsGoal } from "react-icons/gi";
// import { motion } from "framer-motion";
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
//     icon: <GiGearHammer size={24} />,
//     title: "We Build",
//     text: "Our team designs, develops, and iterates rapidly with rigorous quality checks.",
//   },
//   {
//     icon: <GiStairsGoal size={24} />,
//     title: "You Succeed",
//     text: "Deliverables ship on time; results are tracked and support continues.",
//   },
// ];

// // Variants for staggered animations
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: 40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const zoomIn = {
//   hidden: { opacity: 0, scale: 0.6 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const EasyProcess = () => {
//   return (
//     <div className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 text-white">
//       <section className="text-primary body-font">
//         {/* Small heading */}
//         <motion.h2
//           className="text-sm font-semibold tracking-tight text-brand-900"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           How to start
//         </motion.h2>

//         {/* Main heading */}
//         <motion.h1
//           className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-10 pt-6 max-w-lg md:text-left"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           From Idea to Product, Seamlessly
//         </motion.h1>

//         <div className="py-1 mx-auto flex flex-col items-center lg:flex-row gap-8 lg:gap-16">
//           {/* Timeline */}
//           <motion.div
//             className="w-full lg:w-1/2"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {steps.map((step, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex relative pb-5 lg:pb-20"
//                 variants={fadeUp}
//               >
//                 {/* Vertical line */}
//                 {idx < steps.length - 1 && (
//                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                     <motion.div
//                       className="h-full w-1 bg-gray-200 pointer-events-none"
//                       variants={fadeUp}
//                     />
//                   </div>
//                 )}

//                 {/* Icon */}
//                 <motion.div
//                   className="flex-shrink-0 w-12 h-12 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10"
//                   variants={zoomIn}
//                 >
//                   {step.icon}
//                 </motion.div>

//                 {/* Content */}
//                 <motion.div className="flex-grow pl-4" variants={fadeLeft}>
//                   <h2 className="font-semibold title-font lg:text-[18px] text-[16px] text-gray-900 mb-1 tracking-wider">
//                     {step.title}
//                   </h2>
//                   <p className="leading-relaxed text-gray-700">{step.text}</p>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Illustration */}
//           <motion.div
//             className="w-full lg:w-1/2 flex justify-center lg:justify-start"
//             variants={fadeLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <img
//               className="w-full max-w-md lg:max-w-none rounded-lg object-cover"
//               src={process}
//               alt="Process illustration"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EasyProcess;


import React, { useState } from "react";
import { MessageSquare, BarChart3, Hammer, Target, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <MessageSquare size={28} />,
    title: "You Ask",
    text: "Tell us your vision and we'll transform it into a concrete roadmap with clear milestones.",
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "We Analyze",
    text: "Deep research and strategic planning using cutting-edge methodologies and industry insights.",
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: <Hammer size={28} />,
    title: "We Build",
    text: "Rapid prototyping and iterative development with real-time quality assurance and testing.",
    color: "from-orange-500 to-red-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: <Target size={28} />,
    title: "You Succeed",
    text: "Launch with confidence, ongoing support, and measurable results that exceed expectations.",
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/20",
  },
];

const ModernProcess = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 py-16 sm:px-6 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-200 tracking-wide">How We Work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
              From Vision to
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Reality</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A streamlined process designed to turn your boldest ideas into exceptional digital experiences
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connection line for larger screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0 group-hover:from-purple-400/60 transition-all duration-500"></div>
                )}

                {/* Step Card */}
                <div className={`relative h-full p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  hoveredStep === idx 
                    ? 'bg-white/20 border-white/40 shadow-2xl shadow-purple-500/20' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.bgGlow} blur-xl`}></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {step.text}
                  </p>

                  {/* Hover arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center text-purple-300 font-medium">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-md border border-white/20">
              <span>Ready to start your journey?</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ModernProcess;