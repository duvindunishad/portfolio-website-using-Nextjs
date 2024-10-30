// components/Project.js

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GithubIcon } from '../Icons';
import Image from 'next/image';

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article
      className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-gray-300 bg-white p-6 shadow-lg transition-transform duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 xs:p-4"
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Accent */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-2xl bg-gray-200 dark:bg-gray-700" />
      
      {/* Project Image */}
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>

      {/* Project Details */}
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-blue-600 font-medium text-lg dark:text-blue-400">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 text-3xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
        </Link>
        
        {/* Action Links */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400 md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 h-8 md:w-6 md:h-6 flex items-center justify-center">
            <GithubIcon className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
