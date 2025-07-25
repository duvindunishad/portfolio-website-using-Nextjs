// pages/projects.js
import { motion } from 'framer-motion';
import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/component/AnimatedText';
import TransitionEffect from '@/component/TransitionEffect';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import Layout from '@/component/Layout';
import FeaturedProject from '@/component/project/FeaturedProject';
import Project from '@/component/project/Project';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Duvindu | Project Page</title>
        <meta
          name="description"
          content="Showcase of my projects including web applications and more."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
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
                My Projects
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
          </div>{" "}
          <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-12 lg:gap-x-8 md:gap-y-14 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/" // Update with the actual project link
                github="/" // Update with the actual GitHub link
                extraLink="https://www.linkedin.com/feed/" // Update with the additional link if needed
                extraLinkText="View Demo" // Change the button text if needed
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/" // Update with the actual project link
                github="/" // Update with the actual GitHub link
                extraLink="https://www.linkedin.com/feed/" // Update with the additional link if needed
                extraLinkText="View Demo" // Change the button text if needed
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/" // Update with the actual project link
                github="/" // Update with the actual GitHub link
                extraLink="https://www.linkedin.com/feed/" // Update with the additional link if needed
                extraLinkText="View Demo" // Change the button text if needed
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/" // Update with the actual project link
                github="/" // Update with the actual GitHub link
                extraLink="https://www.linkedin.com/feed/" // Update with the additional link if needed
                extraLinkText="View Demo" // Change the button text if needed
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/" // Update with the actual project link
                github="/" // Update with the actual GitHub link
                extraLink="https://www.linkedin.com/feed/" // Update with the additional link if needed
                extraLinkText="View Demo" // Change the button text if needed
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project title="Crypto Screener Application" img={project1} link="/" github="/" type="Featured Project" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Crypto Screener Application" img={project1} link="/" github="/" type="Featured Project" />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"  // Update with the actual project link
                github="/" // Update with the actual GitHub link
                extraLink="/" // Update with the additional link if needed
                extraLinkText="View Documentation" // Change the button text if needed
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Crypto Screener Application" img={project1} link="/" github="/" type="Featured Project" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Crypto Screener Application" img={project1} link="/" github="/" type="Featured Project" />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
