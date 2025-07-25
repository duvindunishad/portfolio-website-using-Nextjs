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
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* <h2 className="text-center text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-16 md:text-5xl">
        Education
      </h2> */}
      <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <motion.h2
                  className="sm:text-3xl text-6xl font-bold mb-4 bg-gradient-to-r dark:text-white text-black bg-clip-text "
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Education          </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "10rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
      
              {/* <motion.p
                    className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Let's build connections! Follow my journey across platforms for
                    daily tech insights, tutorials, and behind-the-scenes content.
                  </motion.p>
      
                  <motion.p
                    className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    (All links open in new tab)
                  </motion.p> */}
            </div>
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
