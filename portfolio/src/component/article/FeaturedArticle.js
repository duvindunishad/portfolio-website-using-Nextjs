import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const articleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <motion.li 
      className="relative col-span-1 w-full p-6 bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out"
      variants={articleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Accent */}
      <div></div>
      {/* <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700" /> */}

      {/* Image Section */}
      <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      {/* Title Section */}
      <Link href={link} target="_blank">
        <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-gray-100 tracking-tight lg:text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {title}
        </h2>
      </Link>

      {/* Summary Section */}
      <p className="text-base my-2 text-gray-700 dark:text-gray-300 leading-relaxed">
        {summary}
      </p>
      
      {/* Time Section */}
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {time}
      </span>
    </motion.li>
  );
};

export default FeaturedArticle;
