// pages/projects.js

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
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
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
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Crypto Screener Application" img={project1} link="/" github="/" type="Featured Project" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project title="Crypto Screener Application" img={project1} link="/" github="/" type="Featured Project" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;