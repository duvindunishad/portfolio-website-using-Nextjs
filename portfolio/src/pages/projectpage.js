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
        <meta name="description" content="Showcase of my projects including web applications and more." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="My Projects!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-12 xl:gap-x-12 lg:gap-x-8 md:gap-y-14 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router, and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"  // Update with the actual project link
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
                link="/"  // Update with the actual project link
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
                link="/"  // Update with the actual project link
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
                link="/"  // Update with the actual project link
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
                link="/"  // Update with the actual project link
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
