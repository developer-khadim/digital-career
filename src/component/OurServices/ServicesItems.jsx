import React from "react";
import cube1 from "../../assets/sotwareDevelopment.png";
import cube2 from "../../assets/Academic&Student.png";
import cube3 from "../../assets/social-media-marketing-icon.png";
import cube4 from "../../assets/art.png";

const services = [
  {
    img: cube1,
    title: "Software Development",
    description:
      "Our development team specializes in creating powerful digital solutions, including frontend, backend, full stack, and mobile applications with Flutter. We also handle artificial intelligence projects, DevOps setups, and general IT solutions. Whether it’s a small project or a large system, we deliver reliable and scalable results.",
  },
  {
    img: cube2,
    title: "Academic & Student Support",
    description:
      "We help students excel in their studies by providing complete support for academic assignments, final year projects, thesis, and research work. From computer science degree tasks to hands-on project development, our experts ensure you deliver high-quality, well-structured work that meets academic standards.",
  },
  {
    img: cube3,
    title: "Digital Marketing",
    description:
      "Grow your online presence with our digital marketing services. From managing social media platforms to running effective marketing campaigns, we help students, freelancers, and businesses build strong visibility and engagement online. Our strategies are designed to boost reach, credibility, and results.",
  },
  {
    img: cube4,
    title: "Design & Creative Media",
    description:
      "Bring your ideas to life with our creative services. We offer professional video editing, photo editing, illustrations, and UI/UX design tailored to your needs. Our design team ensures your brand, project, or portfolio stands out with engaging and impactful visuals.",
  },
];

const ServicesItems = () => {
  return (
    <div className="w-full bg-white  px-4 py-5 xm:py-8 sm:py-8  md:py-20 lg:py-20
     xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-center w-full">
        {services.map((service, idx) => (
          <div key={idx} className="flex gap-4 items-start max-w-4xl mx-auto">
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 bg-transparent flex-shrink-0"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] md:text-[24px] font-semibold text-primary">
                {service.title}
              </h2>
              <p className="text-[14px]  text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesItems;
