import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiInstagram,
  FiFacebook,
  FiExternalLink,
} from "react-icons/fi";
import { SiTiktok, SiBuymeacoffee } from "react-icons/si";
import Link from "next/link";
import Head from "next/head";
import TransitionEffect from "@/component/TransitionEffect";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/duvindunishad",
    icon: <FiGithub />,
    color: "bg-gray-900",
    hoverColor: "hover:bg-gray-800",
    textColor: "text-white",
    stats: "50+ Repos",
    description: "Explore my open-source projects",
    iconBg: "bg-gray-700",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/duvindunishad/",
    icon: <FiLinkedin />,
    color: "bg-[#0A66C2]",
    hoverColor: "hover:bg-[#084d99]",
    textColor: "text-white",
    stats: "1300+ Connections",
    description: "Connect professionally",
    iconBg: "bg-[#084d99]",
  },
  {
    name: "Twitter",
    url: "https://x.com/duvindunishad",
    icon: <FiTwitter />,
    color: "bg-[#1DA1F2]",
    hoverColor: "hover:bg-[#1991db]",
    textColor: "text-white",
    stats: "0k Followers",
    description: "Daily tech insights",
    iconBg: "bg-[#1991db]",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@digitalcodehub",
    icon: <FiYoutube />,
    color: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#cc0000]",
    textColor: "text-white",
    stats: "5.8k Subscribers",
    description: "Tutorials & guides",
    iconBg: "bg-[#cc0000]",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/digitalcodehub",
    icon: <FiInstagram />,
    color: "bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C]",
    hoverColor: "hover:from-[#6a2d91] hover:via-[#a02a6d] hover:to-[#b82558]",
    textColor: "text-white",
    stats: "500+ Followers",
    description: "Behind-the-scenes",
    iconBg: "bg-[#C13584]",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@digitalcodehub",
    icon: <SiTiktok />,
    color: "bg-black",
    hoverColor: "hover:bg-gray-900",
    textColor: "text-white",
    stats: "350+ Followers",
    description: "Short tech videos",
    iconBg: "bg-[#FE2C55]",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100094555213060",
    icon: <FiFacebook />,
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#166fe5]",
    textColor: "text-white",
    stats: "700+ Followers",
    description: "Community updates",
    iconBg: "bg-[#166fe5]",
  },
  {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/digitalcodehub",
    icon: <SiBuymeacoffee />,
    color: "bg-[#FFDD00]",
    hoverColor: "hover:bg-[#e6c700]",
    textColor: "text-[#5F3A00]",
    stats: "26+ Supporters",
    description: "Support my work",
    iconBg: "bg-[#FFDD00]",
    iconColor: "text-[#5F3A00]",
  },
];

const SocialMediaCards = ({
  className = "",
  columns = "grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4",
  animation = true,
  cardSize = "normal",
}) => {
  return (
    <>
      <Head>
        <title>Duvindu | Social Media</title>
        <meta
          name="description"
          content="Connect with Duvindu across various social media platforms"
        />
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <TransitionEffect />
        <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.h2
                className=" sm:text-3xl text-6xl font-bold mb-4 bg-gradient-to-r dark:text-white text-black bg-clip-text "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Connect With Me
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-primaryDark mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "10rem" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Let&apos;s build connections! Follow my journey across platforms
              for daily tech insights, tutorials, and behind-the-scenes content.
            </motion.p>

            <motion.p
              className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              (All links open in new tab)
            </motion.p>
          </div>

          <div className={`w-full ${className}`}>
            <motion.div
              className={`grid ${columns} gap-6`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  whileHover={animation ? { y: -5 } : {}}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`block h-full rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                      link.color
                    } ${link.hoverColor} ${link.textColor} hover:shadow-xl ${
                      cardSize === "compact" ? "p-4" : "p-6"
                    }`}
                  >
                    <div
                      className={`h-full flex flex-col ${
                        cardSize === "compact" ? "gap-2" : "gap-4"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${link.iconBg} ${
                              link.iconColor || "text-white"
                            }`}
                          >
                            {React.cloneElement(link.icon, {
                              className:
                                cardSize === "compact" ? "w-4 h-4" : "w-5 h-5",
                            })}
                          </div>
                          <h3
                            className={`font-bold ${
                              cardSize === "compact" ? "text-base" : "text-xl"
                            }`}
                          >
                            {link.name}
                          </h3>
                        </div>
                        <FiExternalLink
                          className={`${
                            cardSize === "compact" ? "w-4 h-4" : "w-5 h-5"
                          } opacity-70`}
                        />
                      </div>

                      <p
                        className={`${
                          cardSize === "compact" ? "text-xs" : "text-sm"
                        } opacity-90`}
                      >
                        {link.description}
                      </p>

                      <div
                        className={`mt-auto pt-3 border-t border-opacity-20 ${
                          link.textColor === "text-white"
                            ? "border-white"
                            : "border-current"
                        }`}
                      >
                        <p
                          className={`${
                            cardSize === "compact" ? "text-xs" : "text-sm"
                          } opacity-75`}
                        >
                          STATS
                        </p>
                        <p
                          className={`${
                            cardSize === "compact" ? "text-sm" : "text-base"
                          } font-medium`}
                        >
                          {link.stats}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SocialMediaCards;
