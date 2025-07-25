import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPhp,
  SiBootstrap,
  SiFirebase,
} from "react-icons/si";

const SkillItem = ({ name, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col items-center justify-center p-6 border dark:border-white dark:hover:bg-white dark:hover:text-black border-black hover:bg-black hover:text-white transition-colors duration-300 group"
    >
      <Icon className="text-4xl mb-3 group-hover:text-white dark:group-hover:text-black" />
      <span className="text-lg font-medium tracking-wide text-center">
        {name}
      </span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React.js", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript (ES6+)", icon: SiJavascript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "RESTful APIs", icon: SiNodedotjs }, // Using Node icon as placeholder
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git/GitHub", icon: SiGithub },
    { name: "PHP", icon: SiPhp },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Firebase", icon: SiFirebase },
  ];

  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: ["Next.js", "React.js", "Bootstrap"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "PHP", "MongoDB", "Firebase"],
    },
    {
      title: "Languages & Protocols",
      skills: [
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "RESTful APIs",
      ],
    },
    {
      title: "Tools & Utilities",
      skills: ["Tailwind CSS", "Git/GitHub"],
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center py-24 ">
      {/* <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16 tracking-tight text-center"
      >
        Technical Expertise
      </motion.h2> */}
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
            Technical Expertise{" "}
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

      <div className="dark:text-white text-dark w-full max-w-6xl px-4 space-y-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + catIndex * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 border-b dark:border-white border-black pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
              {category.skills.map((skillName) => {
                const skill = skills.find((s) => s.name === skillName);
                const index = skills.findIndex((s) => s.name === skillName);
                return (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                  />
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="dark:text-white text-dark text-lg leading-relaxed">
          Full-stack proficiency with focus on modern web technologies and
          efficient development practices.
        </p>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
