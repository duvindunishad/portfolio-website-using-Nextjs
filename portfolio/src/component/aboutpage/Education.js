// components/Education.js

import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from '../LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 w-full md:w-[85%] mx-auto flex flex-col items-start rounded-lg bg-gradient-to-br from-white to-gray-100 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <h3 className="font-semibold text-3xl text-primary dark:text-primaryDark capitalize sm:text-2xl">
          {type}
        </h3>
        <span className="block text-gray-500 dark:text-gray-400 text-lg mt-1 sm:text-base">
          {time} | {place}
        </span>
        <p className="mt-3 text-gray-600 dark:text-gray-300 font-medium sm:text-sm text-justify">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <section className="py-24 bg-gradient-to-br ">
      <h2 className="text-center text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-16 md:text-5xl">
        Education
      </h2>

      <div ref={ref} className="relative w-[80%] mx-auto lg:w-[90%] md:w-full">
        {/* Scroll Progress Indicator */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-0 w-[4px] h-full bg-gradient-to-b from-white to-dark origin-top dark:from-dark dark:to-white md:left-0 xs:left-0"
        />

        <ul className="flex flex-col items-start justify-between space-y-10 ml-4 xs:ml-2">
          <Details
            type="BSc. (Hons) in Software Engineering"
            time="2020 - 2024"
            place="Plymouth University"
            info="Graduated with Second Class Honours (Lower division), specializing in full-stack development and agile methodologies."
          />
          <Details
            type="Certificate Program in Coding Fundamentals"
            time="2020 - 2022"
            place="NSBM Green University"
            info="Completed intensive coursework in foundational coding and software development practices."
          />
          <Details
            type="G.C.E. Advanced Level in Maths Stream"
            time="2016 - 2020"
            place="Royal Central College - Polonnaruwa"
            info="Excelled in Physics, Information Technology, and English, laying a strong foundation in technical disciplines."
          />
          <Details
            type="G.C.E. Ordinary Level"
            time="2003 - 2013"
            place="Royal Central College - Polonnaruwa"
            info="Achieved commendable grades, successfully completing the Ordinary Level examinations."
          />
        </ul>
      </div>
    </section>
  );
};

export default Education;
