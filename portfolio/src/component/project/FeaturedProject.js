import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GithubIcon } from '../Icons';
import Image from 'next/image';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link = '#', github = '#', extraLink = '#', extraLinkText = "Learn More" }) => {
  return (
    <motion.article
      className="w-full flex items-center justify-between relative rounded-lg border border-gray-300 bg-white shadow-lg p-10 dark:bg-gray-900 dark:border-gray-700 lg:flex-col lg:p-8 xs:rounded-md xs:p-6 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Background Accent */}
      <div className="absolute top-2 left-2 -z-10 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-lg bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-inner" />

      {/* Image Section */}
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-md lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-md object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      {/* Text Content */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-8">
        <span className="text-blue-600 font-semibold text-lg uppercase tracking-wider dark:text-blue-400">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-4">
          <h2 className="mt-3 text-4xl font-bold text-gray-800 dark:text-gray-100 sm:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="mt-4 mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed sm:text-sm">
          {summary}
        </p>

        {/* Action Links */}
        <div className="mt-4 flex items-center space-x-6">
          <Link href={github} target="_blank" className="w-10 transform hover:scale-105 transition-transform duration-200">
            <GithubIcon className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center rounded-lg bg-gray-900 text-white px-5 py-2 text-lg font-semibold shadow-md hover:bg-gray-700 transition-colors duration-200 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-300 sm:px-4 sm:text-base"
          >
            Visit Github
          </Link>
          <Link
            href={extraLink}
            target="_blank"
            className="inline-flex items-center rounded-lg bg-gray-900 text-white px-5 py-2 text-lg font-semibold shadow-md hover:bg-gray-700 transition-colors duration-200 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-300 sm:px-4 sm:text-base"
          >
            {extraLinkText}
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
