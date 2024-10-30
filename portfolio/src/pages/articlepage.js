import Head from "next/head";

import article from "../../public/images/articles/create loading screen in react js.jpg";
import article2 from "../../public/images/articles/create modal component in react using react portals.png";
import article3 from "../../public/images/articles/pagination component in reactjs.jpg";
import article4 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article5 from "../../public/images/articles/What is Redux with easy explanation.png";
import article6 from "../../public/images/articles/What is higher order component in React.jpg";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import Layout from "@/component/Layout";
import AnimatedText from "@/component/AnimatedText";
import FeaturedArticle from "@/component/article/FeaturedArticle";
import Article from "@/component/article/Article";
import TransitionEffect from "@/component/TransitionEffect";

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>Duvindu | Articles</title>
        <meta name="description" content="A collection of articles written by Duvindu" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summery="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article}
            />
            <FeaturedArticle
              title="Create Modal Component in React Using React Portals"
              summery="Learn how to create a modal component in React using React portals. This guide will help you integrate a flexible modal into your React project."
              time="8 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2024"
              link="/"
              img={article3}
            />
            <Article
              title="Todo List App Built Using React, Redux, and Framer Motion"
              date="March 22, 2024"
              link="/"
              img={article4}
            />
            <Article
              title="What is Redux: An Easy Explanation"
              date="March 22, 2024"
              link="/"
              img={article5}
            />
            <Article
              title="What is a Higher Order Component in React"
              date="March 22, 2024"
              link="/"
              img={article6}
            />
            <Article
              title="Understanding Redux with Easy Explanations"
              date="March 22, 2024"
              link="/"
              img={article7}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default ArticlesPage;
