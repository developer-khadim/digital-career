
import React from "react";

const jobdata = [
  {
    role: "Senior Web Full Stack Developer",
    description:
      "Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.",
    skills: [
      "Node.js",
      "React js",
      "Vue js",
      "TypeScript",
      "JavaScript",
      "Next JS",
      "Amplify",
      "AWS",
      "Terraform",
      "C# and .NET",
      "GraphQL",
      "Serverless Framework",
    ],
    locations: [
      "Remote"
    ],
  },
  
];

const Job = () => {
  return (   
    < section className="">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 sm:mb-6 text-center sm:text-left">
        Developers
      </h1>

      {/* Mobile-first cards | lg: table-like grid */}
      <div className="bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg shadow-md space-y-4 sm:space-y-6 lg:space-y-0">
        {/* ----- Header: hidden on small screens ----- */}
        <div className="hidden lg:grid lg:grid-cols-12 xl:grid-cols-12 gap-x-4 xl:gap-x-6 font-semibold text-primary mb-4">
          <span className="lg:col-span-4 xl:col-span-4">ROLE</span>
          <span className="lg:col-span-5 xl:col-span-5">SKILLS</span>
          <span className="lg:col-span-3 xl:col-span-3">LOCATION</span>
        </div>
        <hr className="hidden lg:block border-gray-300 mb-4" />

        {/* ----- Job row(s) ----- */}
        {jobdata.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 lg:gap-x-4 xl:gap-x-6 gap-y-4 sm:gap-y-6 py-4 sm:py-6 last:pb-0"
          >
            {/* ROLE */}
            <div className="lg:col-span-4 xl:col-span-4 space-y-2 sm:space-y-3">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 leading-tight">
                {job.role}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* SKILLS */}
            <div className="lg:col-span-5 xl:col-span-5">
              <h3 className="font-semibold text-gray-700 mb-2 sm:mb-3 lg:hidden text-sm sm:text-base">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {job.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-primary text-white text-xs sm:text-sm md:text-base font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:text-primary hover:bg-transparent hover:border hover:border-primary transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* LOCATIONS */}
            <div className="lg:col-span-3 xl:col-span-3">
              <h3 className="font-semibold text-gray-700 mb-2 sm:mb-3 lg:hidden text-sm sm:text-base">
                Location
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm md:text-base text-gray-600">
                {job.locations.map((loc, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* ----- CTA ----- */}
        <div className="mt-4 sm:mt-6 lg:mt-8 text-center lg:text-right">
          <a
            href="mailto:digitalcareerIT@gmail.com"
            className="inline-block text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-md font-bold bg-primary text-white hover:text-primary hover:bg-transparent hover:border-2 hover:border-primary transition-all duration-200 transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Job;