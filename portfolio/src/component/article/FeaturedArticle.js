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

const FeaturedArticle = ({ img, title, time, summery, link }) => {
  return (
    <motion.li 
      className="relative col-span-1 w-full p-8 bg-white shadow-lg border border-gray-200 rounded-xl dark:bg-gray-900 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      variants={articleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-xl bg-gray-200 dark:bg-gray-800" />

      <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-semibold mt-4 hover:underline text-gray-900 dark:text-gray-100 tracking-tight lg:text-xl">
          {title}
        </h2>
      </Link>

      <p className="text-sm my-3 text-gray-600 dark:text-gray-300 leading-relaxed">
        {summery}
      </p>
      
      <span className="text-xs font-medium text-primary dark:text-primaryDark">
        {time}
      </span>
    </motion.li>
  );
};

export default FeaturedArticle;
