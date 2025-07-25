import Layout from "@/component/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/component/Icons";
import HireMe from "@/component/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/component/TransitionEffect";
import Head from "next/head";
import AboutPage from "./aboutpage";
import ArticlesPage from "./articlepage";
import ProjectsPage from "./projectpage";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import SocialMedia from "./socialmedia";
import MyShop from "./myshop";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image 
                src={profilePic} 
                alt="duvindu" 
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 50vw" 
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText 
                text="Hello! 👋 I'm Duvindu Nishad " 
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' 
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Skilled MERN stack developer with expertise in Next.js, React, MongoDB, JavaScript, Node.js, and TypeScript, specializing in building scalable, user-friendly web applications. Passionate about problem-solving, clean code, and delivering high-performance solutions in dynamic environments.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/DuvinduNishad.pdf" target={"_blank"} className="flex items-center bg-black text-light
                  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base" 
                  download={true}>
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:duvindunishad@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="duvindu" className='w-full h-auto' />
        </div>
      </main>
      <AboutPage />
      <ProjectsPage />
      <ArticlesPage />
      <SocialMedia />
      <MyShop />
      
      {/* Scroll-to-Top Button with Bounce Animation */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} // Bounce animation
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 300 }} // Spring transition for bouncing effect
        >
          ↑
        </motion.button>
      )}
    </>
  );
}
