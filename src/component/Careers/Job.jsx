import React, { useState } from "react";

// ----- Example Job Data -----
const jobdata = {
  "Frontend Developer": [],
  "Backend Developer": [],
  "Full Stack Developer": [],
  "Mobile App Developer": [],
  "AI & Data Engineer": [],
  "DevOps Engineer": [],
  "UI/UX & Media Designer": [],
  "Digital Marketing Specialist": [],
  "General IT Support": [],
  "Internships": [
    {
      role: "Freelancing Platform Expert",
      description: `We're Hiring – Freelancing platform expert
Experience: Fresh
Timings: 10:00PM - 4:00AM
Salary: 10% on every order + monthly bonus based on performance
This opportunity may lead to a permanent position.
Send your resume to digitalcareeerit@gmail.com with the job title in subject line.`,
      skills: ["Freelancing Platforms", "Client Management", "Communication"],
      locations: ["Remote"],
    },
  ],
};

// Add "All" tab at the beginning
const categories = ["All", ...Object.keys(jobdata)];

const Job = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Aggregate jobs if "All" selected
  const jobs =
    activeCategory === "All"
      ? Object.values(jobdata).flat()
      : jobdata[activeCategory];

  return (
    <section className=" select-none">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 text-center sm:text-left">
        Job Openings
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 sm:gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-md font-semibold text-sm sm:text-base transition-all duration-200
              ${
                activeCategory === cat
                  ? "bg-secondary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-secondary hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Jobs List */}
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
        {jobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-5xl mb-4">👨‍💻</div>
            <h2 className="text-lg sm:text-xl font-bold text-primary mb-2">
              No {activeCategory} Positions Available
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mb-6">
              We’re not hiring for {activeCategory} right now, but feel free to
              send us your CV for future opportunities.
            </p>
            <a
              href="mailto:digitalcareerIT@gmail.com"
              className="inline-block text-sm sm:text-base py-2.5 px-6 rounded-md font-bold bg-secondary text-white hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Send Your CV
            </a>
          </div>
        ) : (
          <>
            {/* Table Header for Large Screens */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-x-6 font-semibold text-primary mb-4">
              <span className="lg:col-span-4">ROLE</span>
              <span className="lg:col-span-5">SKILLS</span>
              <span className="lg:col-span-3">LOCATION</span>
            </div>
            <hr className="hidden lg:block border-gray-300 mb-4" />

            {/* Jobs */}
            {jobs.map((job, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-4 py-6 border-b border-gray-300 last:border-0"
              >
                {/* ROLE */}
                <div className="lg:col-span-4 space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800">
                    {job.role}
                  </h2>
                  <p className="text-sm text-gray-600">{job.description}</p>
                </div>
                {/* SKILLS */}
                <div className="lg:col-span-5">
                  <h3 className="font-semibold text-gray-700 mb-2 lg:hidden">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-primary text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-md hover:text-primary hover:bg-transparent hover:border hover:border-primary transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LOCATION */}
                <div className="lg:col-span-3">
                  <h3 className="font-semibold text-gray-700 mb-2 lg:hidden">
                    Location
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {job.locations.map((loc, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {loc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-6 text-center lg:text-right">
              <a
                href="mailto:digitalcareeerit@gmail.com"
                className="inline-block text-sm sm:text-base py-2.5 px-6 rounded-md font-bold bg-primary text-white hover:text-primary hover:bg-transparent hover:border-2 hover:border-primary transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Apply Now
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Job;
