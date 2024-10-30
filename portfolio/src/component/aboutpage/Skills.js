import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="my-4 w-full md:w-[85%] mx-auto flex items-center justify-center rounded-lg bg-gradient-to-br from-white to-gray-100 p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-dark dark:from-gray-800 dark:to-gray-900 dark:text-gray-100"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS',
    'Angular', 'Figma', 'MongoDB', 'Firebase', 'Tailwind CSS',
  ];

  return (
    <section className="mt-5 py-24 bg-light dark:bg-dark relative w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-center text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-16 md:text-5xl">
        Skills
      </h2>

      <div className="relative w-[80%] mx-auto lg:w-[90%] md:w-full grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
  {skills.map((skill, index) => (
    <Skill key={index} name={skill} />
  ))}
</div>

    </section>
  );
};

export default Skills;
