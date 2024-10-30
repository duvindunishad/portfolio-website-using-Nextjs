// components/Experience.js

import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from '../LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="font-semibold text-2xl text-dark dark:text-white capitalize sm:text-xl">
          {position}{' '}
          <a href={companyLink} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="block text-gray-500 dark:text-gray-400 text-lg mt-1 sm:text-base">
          {time} | {address}
        </span>
        <p className="mt-3 text-gray-600 dark:text-gray-300 font-medium sm:text-sm text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <section className="py-24 bg-gradient-to-br ">
      <h2 className="text-center text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-16 md:text-5xl">
        Experience
      </h2>

      <div ref={ref} className="relative w-[80%] mx-auto lg:w-[90%] md:w-full">
        {/* Scroll Progress Indicator */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-0 w-[4px] h-full bg-gradient-to-b from-white to-dark origin-top dark:from-dark dark:to-white md:left-0 xs:left-0"
        />

        <ul className="flex flex-col items-start justify-between space-y-10 ml-4 xs:ml-2">
          <Details
            position="Software Engineer MERN Stack Developer"
            company="Donext"
            companyLink="https://www.linkedin.com/company/donexttechnologies/"
            time="2024-07 - Present"
            address="Ambalangoda, Southern Province, LK"
            work="As a MERN stack developer at Donext, I specialize in building dynamic, scalable web applications using MongoDB, Next.js, Tailwind CSS, React.js, and Node.js. My role involves collaborating with teams to design, develop, and deploy solutions that enhance user experience and drive business growth, focusing on high-quality and maintainable code."
          />
          <Details
            position="Programming Content Creator"
            company="Digital Code Hub"
            companyLink="https://www.youtube.com/@digitalcodehub"
            time="2022-06 - Present"
            address="Polonnaruwa, SL"
            work="I'm the creator behind Digital Code Hub, where I share engaging coding tutorials on technologies like HTML, CSS, JavaScript, React, and more. Join my YouTube channel for weekly updates and mini-project tutorials to start your journey as a proficient coder!"
          />
        </ul>
      </div>
    </section>
  );
};

export default Experience;
