// import React from "react";
// import icon1 from "../../assets/link.png";
// import icon2 from "../../assets/management.png";
// import icon3 from "../../assets/outsourcing.png";
// import icon4 from "../../assets/shield.png";

// const HireRemort = () => {
//   const hireOptions = [
//     {
//       icon: icon1,
//       title: "Dedicated Development Teams",
//       desc: "Scale your business with expert engineers working exclusively on your projects.",
//     },
//     {
//       icon: icon2,
//       title: "Staff Augmentation",
//       desc: "Seamlessly extend your in-house team with top-tier remote professionals.",
//     },
//     {
//       icon: icon3,
//       title: "Custom Software Solutions",
//       desc: "From idea to deployment — full-cycle software development tailored to your needs.",
//     },
//     {
//       icon: icon4,
//       title: "Remote Tech Office",
//       desc: "Set up your own offshore development center with zero overhead hassle.",
//     },
//   ];

//   return (
//     <section className="w-full px-3 py-10 sm:px-2 md:px-12 xl:px-40 lg:px-40 bg-white">
//       <div className="w-full flex flex-col gap-10">
//         {/* Heading */}
//         <div>
//           <span className="font-semibold text-primary">Our Expertise</span>
//           <h1 className="text-5xl font-bold text-primary py-2">
//             Build Your Dream Team <br /> With Top Remote Talent
//           </h1>
//           <p className="text-sm text-primary mt-2">
//             Whether you need a full remote team or just a few dedicated
//             developers, we help you hire the right talent, faster and smarter.
//           </p>
//         </div>

//         {/* Hire Options */}
//         <div className="flex flex-wrap justify-between gap-6 w-full">
//           {hireOptions.map((option, index) => (
//             <div key={index} className="w-full sm:w-1/2 lg:w-1/5">
//               <img
//                 src={option.icon}
//                 alt={option.title}
//                 className="w-16 h-16 bg-yellow-300 p-2 rounded-lg shadow-md"
//               />
//               <div>
//                 <h1 className="text-primary font-semibold text-xl py-2">
//                   {option.title}
//                 </h1>
//                 <p className="text-primary text-sm">{option.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HireRemort;


import React from "react";
import {
  Globe,
  Smartphone,
  Brain,
  BookOpen,
  Megaphone,
  Palette,
} from "lucide-react";

const HireRemort = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-yellow-500" />,
      title: "Web Development",
      desc: "Modern, responsive, and user-friendly websites to grow your business.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-yellow-500" />,
      title: "Mobile App Development",
      desc: "Cross-platform Flutter apps that deliver smooth performance.",
    },
    {
      icon: <Brain className="w-10 h-10 text-yellow-500" />,
      title: "AI & Development Projects",
      desc: "Smart solutions including cloud, automation, and AI projects.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-yellow-500" />,
      title: "Thesis & Research Work",
      desc: "Professional research, writing, and academic project support.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-yellow-500" />,
      title: "Social Media Marketing",
      desc: "Boost your brand with targeted campaigns and growth strategies.",
    },
    {
      icon: <Palette className="w-10 h-10 text-yellow-500" />,
      title: "Design & Editing",
      desc: "Creative graphics, photo editing & illustrations that stand out.",
    },
  ];

  return (
    <section className="w-full px-3 py-10 sm:px-2 md:px-12 xl:px-40 lg:px-40 bg-white">
      <div className="w-full flex flex-col gap-10">
        {/* Heading */}
        <div>
          <span className="font-semibold text-primary">Our Services</span>
          <h1 className="text-5xl font-bold text-primary py-2">
            Empowering Students & Businesses <br /> With Smart Digital Solutions
          </h1>
          <p className="text-sm text-primary mt-2">
            From websites to AI projects, we deliver reliable, affordable, and
            professional digital services that help you succeed in both
            academics and business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-between gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="bg-yellow-100 w-16 h-16 flex items-center justify-center rounded-lg shadow-md">
                {service.icon}
              </div>
              <h1 className="text-primary font-semibold text-xl py-2">
                {service.title}
              </h1>
              <p className="text-primary text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireRemort;
