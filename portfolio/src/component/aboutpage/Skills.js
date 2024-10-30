import React from 'react';
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Reduced for smoother cascading effect
    },
  },
};

const Skill = ({ name }) => {
  return (
    <motion.div
  variants={skillVariants}
  className="flex items-center justify-center rounded-lg font-semibold bg-gray-800 text-white py-4 px-6 shadow-lg cursor-pointer transition-transform duration-200 ease-in-out
    hover:scale-105 hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
  whileHover={{ scale: 1.1 }}
>
  {name}
</motion.div>

  
  );
};

const Skills = () => {
  return (
<section className="mt-4 bg-light dark:bg-dark relative w-full min-h-screen flex flex-col items-center justify-center py-16 shadow-lg">
<h2 className="font-extrabold text-7xl text-gray-800 dark:text-gray-100 tracking-tight mb-12 md:text-5xl">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-3 gap-8 w-3/4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Controls when the animation starts
      >
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="ReactJS" />
        <Skill name="NextJS" />
        <Skill name="Angular" />
        <Skill name="Figma" />
        <Skill name="MongoDB" />
        <Skill name="Firebase" />
        <Skill name="Tailwind CSS" />
      </motion.div>
    </section>
  );
};

export default Skills;
