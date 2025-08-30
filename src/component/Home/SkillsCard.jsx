import React from "react";

const SkillsCard = ({ icon, text }) => (
  // <div className="flex w-full items-center justify-center px-2 sm:px-4 py-4 sm:py-6 md:py-8">
  <div className="flex w-full items-center justify-center ">
    <div className="flex w-full max-w-xs sm:max-w-sm md:max-w-md min-h-[72px] sm:min-h-[88px] bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Left accent bar */}
      <div className="w-2 sm:w-3 bg-primary" />

      {/* Content */}
      <div className="flex flex-1 items-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 p-3 sm:p-4 md:p-5">
        <img
          src={icon}
          alt={text}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 ml-1 sm:ml-2"
        />
        <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg= text-black leading-tight">
          {text}
        </span>
      </div>
    </div>
  </div>
);

export default SkillsCard;


// date30
// date31
// date1
// date2
// date3
// date4
// date5
// date6
// date7
// date8