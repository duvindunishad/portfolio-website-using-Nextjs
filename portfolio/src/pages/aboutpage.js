import Head from "next/head";
import React from "react";
import Layout from "../component/Layout";
import TransitionEffect from "../component/TransitionEffect";
import { motion } from "framer-motion";

import Stats from "@/component/aboutpage/Stats";
import Skills from "@/component/aboutpage/Skills";
import Experience from "@/component/aboutpage/Experience";
import Education from "@/component/aboutpage/Education";
import AnimatedText from "@/component/AnimatedText";
import Bio from "@/component/aboutpage/Bio";

const AboutPage = () => (
  <>
    <Head>
      <title>Duvindu | About Page</title>
      <meta name="description" content="About Duvindu Nishad" />
    </Head>
    <TransitionEffect />
    <main className="flex w-full flex-col items-center justify-center overflow-hidden dark:text-light">
      <Layout className="pt-16">
        {/* <AnimatedText
          text="About"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        /> */}          
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
                About Me
              </motion.h2>
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
        <Bio />
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </main>
  </>
);

export default AboutPage;
