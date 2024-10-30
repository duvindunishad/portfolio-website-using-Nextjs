import Head from "next/head";
import React from "react";
import Layout from "../component/Layout";
import TransitionEffect from "../component/TransitionEffect";


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
        <AnimatedText
          text="About"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <Bio/>
        <Skills/>
        <Experience/>
        <Education/>
      </Layout>
    </main>
  </>
);

export default AboutPage;
