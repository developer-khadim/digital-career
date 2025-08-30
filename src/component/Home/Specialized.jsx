import React from "react";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";

// icons
import frontend from "../../assets/frontend.png";
import android from "../../assets/androad.png";
import angular from "../../assets/angular.png";
import fullstack from "../../assets/fullstack.png";
import php from "../../assets/php.png";
import ai from "../../assets/ai.png";
import devops from "../../assets/devops.png";
import uiux from "../../assets/UIUX.png";
import data from "../../assets/data.png";
import wordpress from "../../assets/wardprass.png";
import dba from "../../assets/database.png";
import pm from "../../assets/project.png";
import Ac from "../../assets/Academic.png";
import ca from "../../assets/csAssignemnt.png";
import soc from "../../assets/social.png";
import pho from "../../assets/photo.png";
import th from "../../assets/Thesis.png";
import ve from "../../assets/video.png";
import fp from "../../assets/freelancning.png";

const staff = [
  { icon: frontend, text: "Frontend Engineers" },
  { icon: fullstack, text: "Full-stack Engineers" },
  { icon: android, text: "Android Developers" },
  { icon: ai, text: "AI / ML Engineers" },
  { icon: uiux, text: "UI / UX Engineers" },
  { icon: data, text: "Data Scientists" },
  { icon: wordpress, text: "WordPress Developers" },
  {
    icon: ve,
    text: "Video Editing",
  },
  {
    icon: pho,
    text: "Photo Editing",
  },
  {
    icon: ca,
    text: "CS&IT Degree Assignments",
  },
  {
    icon: Ac,
    text: "Academic Assignment",
  },
  {
    icon: soc,
    text: "Social Media Marketing",
  },
  {
    icon: fp,
    text: "Freelancing Projects",
  },
  {
    icon: th,
    text: "Thesis and Research Work",
  },
];

// animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const Specialized = () => {
  return (
    <section className="w-full px-4 py-6 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 body-font bg-white">
      {/* Heading */}
      <div className="pb-6">
        <motion.h2
          className="text-sm font-semibold tracking-tight text-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Specialized
        </motion.h2>

        <motion.h1
          className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 pt-6 max-w-lg md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Specialized Staff We Provide
        </motion.h1>
      </div>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {staff.map((member, index) => (
          <motion.div key={index} variants={zoomIn} custom={index}>
            <SkillsCard icon={member.icon} text={member.text} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Specialized;
