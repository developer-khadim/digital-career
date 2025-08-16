
import React from "react";
import Massage from "../../assets/massage&faq.png";
import medal from "../../assets/medal.png";
import resetting from "../../assets/resettings.png";
import handshake from "../../assets/handshake.png";

const EasyProcess = () => {
  const ProcessData = [
    { icon: Massage, id: "01", label: "YOU ASK" },
    { icon: resetting, id: "02", label: "WE ANALYZE" },
    { icon: handshake, id: "03", label: "WE BUILD" },
    { icon: medal, id: "04", label: "YOU SUCCEED" },
  ];
// asd
  return (
    <div className="w-full px-3 py-10 sm:px-2 md:px-12 xl:px-40 lg:px-40 text-white bg-gradient-to-r from-[#FF9900] to-[#F2CB00]">
      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center mb-10">
        <span className="font-semibold text-white">How To Start</span>
        <h1 className="text-4xl font-bold text-primary pt-2 pb-3">
          Easy Process
        </h1>
        <p className="text-[16px] text-primary w-80 text-center">
          We specialize in helping you build a team of expert developers,
          testers, and leaders.
        </p>
      </div>

      {/* Process Steps */}
      <div className="flex justify-between items-center w-full mt-10">
        {ProcessData.map((data, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className=" flex items-center justify-center ">
              <img src={data.icon} alt={data.label} className="w-20 h-20" />
            </div>

            {/* ID + Label */}
            <div className="mt-4 flex justify-center items-center gap-2 ">
              <span className="block text-xl font-bold text-primary">
                {data.id}
              </span>
              <span className="block text-lg text-primary font-medium">
                {data.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyProcess;
