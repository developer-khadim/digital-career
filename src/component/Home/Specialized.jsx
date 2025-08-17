// // import React from 'react';
// // import SkillsCard from './SkillsCard';

// // // icons
// // import frontend from '../../assets/frontend.png';
// // import android from '../../assets/androad.png';
// // import angular from '../../assets/angular.png';
// // import fullstack from '../../assets/fullstack.png';
// // import php from '../../assets/php.png';
// // import ai from '../../assets/ai.png';
// // import devops from '../../assets/devops.png';
// // import uiux from '../../assets/UIUX.png';
// // import data from '../../assets/data.png';
// // import wordpress from '../../assets/wardprass.png';
// // import dba from '../../assets/database.png';
// // import pm from '../../assets/project.png';

// // const Specialized = () => {

// // const staff = [
// //   { icon: frontend,  text: 'Frontend Engineers' },
// //   { icon: android,   text: 'Android Developers' },
// //   { icon: angular,   text: 'Angular Developers' },
// //   { icon: fullstack, text: 'Full-stack Engineers' },
// //   { icon: php,       text: 'PHP Developers' },
// //   { icon: ai,        text: 'AI / ML Engineers' },
// //   { icon: devops,    text: 'DevOps Engineers' },
// //   { icon: uiux,      text: 'UI / UX Engineers' },
// //   { icon: data,      text: 'Data Scientists' },
// //   { icon: wordpress, text: 'WordPress Developers' },
// //   { icon: dba,       text: 'Database Admins' },
// //   { icon: pm,        text: 'Project Managers' },
// // ];




// //   return (
// //     <section className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40  body-font">
// //       <div className="pb-6" >
// //         <h2 className="text-sm font-semibold tracking-tight text-brand-900 text-primary">
// //           Specialized
// //         </h2>
// //         <h1 className=" text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6 max-w-lg md:text-left">
// //           Specialized Staff We Provide
// //         </h1>
// //       </div>
// //       <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full" >
// //         <SkillsCard icon={img} text=" Frontend Engineer "/>
// //         <SkillsCard icon={appdev} text=" Androaid Developer "/>
// //         <SkillsCard icon={angular} text=" Angular Developers "/>
// //         <SkillsCard icon={fullstak} text=" Fullstack Engineers "/>
// //         <SkillsCard icon={php} text=" PHP Developers"/>
// //         <SkillsCard icon={ai} text=" AI and ML Engineers Deep Learning "/>
// //         <SkillsCard icon={devops} text="DevOps Engineer "/>
// //         <SkillsCard icon={uiux} text="UI/UX Engineers" />
// //         <SkillsCard icon={data} text="Data scientist "/>
// //         <SkillsCard icon={wordprass} text="Wordpress Developers"/>
// //         <SkillsCard icon={database} text="Database admin" />
// //         <SkillsCard icon={project} text="Project Management" />
        
// //       </div>
// //     </section>
// //   );
// // };

// // export default Specialized;



// import React from 'react';
// import SkillsCard from './SkillsCard';

// // icons
// import frontend from '../../assets/frontend.png';
// import android from '../../assets/androad.png';
// import angular from '../../assets/angular.png';
// import fullstack from '../../assets/fullstack.png';
// import php from '../../assets/php.png';
// import ai from '../../assets/ai.png';
// import devops from '../../assets/devops.png';
// import uiux from '../../assets/UIUX.png';
// import data from '../../assets/data.png';
// import wordpress from '../../assets/wardprass.png';
// import dba from '../../assets/database.png';
// import pm from '../../assets/project.png';

// const Specialized = () => {
//   const staff = [
//     { icon: frontend,  text: 'Frontend Engineers' },
//     { icon: android,   text: 'Android Developers' },
//     { icon: angular,   text: 'Angular Developers' },
//     { icon: fullstack, text: 'Full-stack Engineers' },
//     { icon: php,       text: 'PHP Developers' },
//     { icon: ai,        text: 'AI / ML Engineers' },
//     { icon: devops,    text: 'DevOps Engineers' },
//     { icon: uiux,      text: 'UI / UX Engineers' },
//     { icon: data,      text: 'Data Scientists' },
//     { icon: wordpress, text: 'WordPress Developers' },
//     { icon: dba,       text: 'Database Admins' },
//     { icon: pm,        text: 'Project Managers' },
//   ];

//   return (
//     <section className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 body-font">
//       {/* Heading */}
//       <div className="pb-6">
//         <h2 className="text-sm font-semibold tracking-tight text-primary">
//           Specialized
//         </h2>
//         <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6 max-w-lg md:text-left">
//           Specialized Staff We Provide
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
//         {staff.map((member, index) => (
//           <SkillsCard key={index} icon={member.icon} text={member.text} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Specialized;


import React, { useEffect } from 'react';
import SkillsCard from './SkillsCard';
import AOS from "aos";
import "aos/dist/aos.css";

// icons
import frontend from '../../assets/frontend.png';
import android from '../../assets/androad.png';
import angular from '../../assets/angular.png';
import fullstack from '../../assets/fullstack.png';
import php from '../../assets/php.png';
import ai from '../../assets/ai.png';
import devops from '../../assets/devops.png';
import uiux from '../../assets/UIUX.png';
import data from '../../assets/data.png';
import wordpress from '../../assets/wardprass.png';
import dba from '../../assets/database.png';
import pm from '../../assets/project.png';

const Specialized = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 50,
    });
  }, []);

  const staff = [
    { icon: frontend,  text: 'Frontend Engineers' },
    { icon: android,   text: 'Android Developers' },
    { icon: angular,   text: 'Angular Developers' },
    { icon: fullstack, text: 'Full-stack Engineers' },
    { icon: php,       text: 'PHP Developers' },
    { icon: ai,        text: 'AI / ML Engineers' },
    { icon: devops,    text: 'DevOps Engineers' },
    { icon: uiux,      text: 'UI / UX Engineers' },
    { icon: data,      text: 'Data Scientists' },
    { icon: wordpress, text: 'WordPress Developers' },
    { icon: dba,       text: 'Database Admins' },
    { icon: pm,        text: 'Project Managers' },
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-12 lg:px-40 xl:px-40 body-font bg-white ">
      {/* Heading */}
      <div className="pb-6">
        <h2 
          className="text-sm font-semibold tracking-tight text-primary"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Specialized
        </h2>
        <h1 
          className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6 max-w-lg md:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Specialized Staff We Provide
        </h1>
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {staff.map((member, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={400 + (index * 100)}
            data-aos-duration="600"
          >
            <SkillsCard icon={member.icon} text={member.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialized;