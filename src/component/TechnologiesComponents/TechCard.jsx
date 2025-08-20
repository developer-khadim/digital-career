import React, { useState } from "react";
import { Code, Database, Smartphone, Cloud, Cpu, Globe } from "lucide-react";

// Import your images
const html = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const css = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const js = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const react = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const node = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const python = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const java = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
const php = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg";
const mysql = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
const mongodb = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
const flutter = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg";
const android = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg";
const laravel = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg";
const angular = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg";
const vue = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg";

// Tab categories with Lucide icons
const tabs = [
  { id: "all", label: "All", icon: Globe },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Cpu },
  { id: "frameworks", label: "Frameworks", icon: Code },
  { id: "mobile", label: "Mobile App", icon: Smartphone },
  { id: "databases", label: "Databases", icon: Database },
  { id: "devops", label: "DevOps", icon: Cloud },
];

// Technology data with actual images
const technologies = {
  frontend: [
    { name: "HTML5", category: "frontend", icon: html },
    { name: "CSS3", category: "frontend", icon: css },
    { name: "JavaScript", category: "frontend", icon: js },
    { name: "React", category: "frontend", icon: react },
    { name: "Vue.js", category: "frontend", icon: vue },
    { name: "Angular", category: "frontend", icon: angular },
  ],
  backend: [
    { name: "Node.js", category: "backend", icon: node },
    { name: "Python", category: "backend", icon: python },
    { name: "Java", category: "backend", icon: java },
    { name: "PHP", category: "backend", icon: php },
  ],
  frameworks: [
    { name: "Laravel", category: "frameworks", icon: laravel },
    { name: "React", category: "frameworks", icon: react },
    { name: "Angular", category: "frameworks", icon: angular },
    { name: "Vue.js", category: "frameworks", icon: vue },
  ],
  mobile: [
    { name: "Flutter", category: "mobile", icon: flutter },
    { name: "Android", category: "mobile", icon: android },
    { name: "React Native", category: "mobile", icon: react },
  ],
  databases: [
    { name: "MySQL", category: "databases", icon: mysql },
    { name: "MongoDB", category: "databases", icon: mongodb },
  ],
  devops: [{ name: "Node.js", category: "devops", icon: node }],
};

// Image component for technology icons
const TechIcon = ({ name, icon }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src={icon}
        alt={name}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </div>
  );
};

const TechCard = () => {
  const [activeTab, setActiveTab] = useState("all");

  const getActiveTechnologies = () => {
    if (activeTab === "all") {
      return Object.values(technologies).flat();
    }
    return technologies[activeTab] || [];
  };

  return (
    // <section className="w-full min-h-screen px-4 py-20 bg-white">
    <section className="w-full h-auto px-4 py-20 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 bg-white overflow-hidden" >
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
     
{/* Tabs */}
<div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 mb-12">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex-shrink-0 px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300
        ${
          activeTab === tab.id
            ? "bg-secondary text-white font-semibold shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
    >
      {tab.label}
    </button>
  ))}
</div>

        
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {getActiveTechnologies().map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center aspect-square group"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                <TechIcon name={tech.name} icon={tech.icon} />
              </div>
              <p className="text-sm font-medium text-gray-700 text-center leading-tight">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCard;
