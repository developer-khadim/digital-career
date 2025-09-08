import React, { useState } from "react";
import { MessageSquare, BarChart3, Hammer, Target, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={28} />,
    title: "You Ask",
    text: "Tell us your vision and we'll transform it into a concrete roadmap with clear milestones.",
    color: "from-purple-500 to-pink-500",
    hoverColor: "group-hover:text-purple-600",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "We Analyze",
    text: "Deep research and strategic planning using cutting-edge methodologies and industry insights.",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "group-hover:text-blue-600",
  },
  {
    icon: <Hammer size={28} />,
    title: "We Build",
    text: "Rapid prototyping and iterative development with real-time quality assurance and testing.",
    color: "from-orange-500 to-red-500",
    hoverColor: "group-hover:text-orange-600",
  },
  {
    icon: <Target size={28} />,
    title: "You Succeed",
    text: "Launch with confidence, ongoing support, and measurable results that exceed expectations.",
    color: "from-green-500 to-emerald-500",
    hoverColor: "group-hover:text-green-600",
  },
];

const ModernProcess = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <div className="relative overflow-hidden">
      <div className="w-full px-4 py-16 sm:px-6 md:px-12 lg:px-20 xl:px-40">
        <div className="w-full">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">How We Work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              From Vision to
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Reality</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0 group-hover:from-purple-400 transition-all duration-500"></div>
                )}

                {/* Step Card */}
                <div className={`relative h-full p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  hoveredStep === idx 
                    ? 'bg-white border-gray-300 shadow-2xl shadow-gray-200/50' 
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}>
                  
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
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 ${step.hoverColor}`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {step.text}
                  </p>

                  {/* Hover arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernProcess;