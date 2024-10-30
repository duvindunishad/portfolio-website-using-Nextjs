import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GithubIcon } from '../Icons';
import Image from 'next/image';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      className="w-full flex items-center justify-between relative rounded-2xl border border-gray-300 bg-white shadow-lg p-8 dark:bg-gray-800 dark:border-gray-700 lg:flex-col lg:p-6 xs:rounded-lg xs:p-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Background Accent */}
      <div className="absolute top-0 -right-2 -z-10 w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700" />

      {/* Image Section */}
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      {/* Text Content */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-blue-600 font-medium text-lg dark:text-blue-400">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:text-xl">{title}</h2>
        </Link>
        <p className="mt-4 mb-6 text-base font-normal text-gray-700 dark:text-gray-300 sm:text-sm">
          {summary}
        </p>
        
        {/* Action Links */}
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit the Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
