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

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <FiGithub />,
    color: "bg-gray-900",
    hoverColor: "hover:bg-gray-800",
    textColor: "text-white",
    stats: "120+ Repos",
    description: "Explore my open-source projects",
    iconBg: "bg-gray-700",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: <FiLinkedin />,
    color: "bg-[#0A66C2]",
    hoverColor: "hover:bg-[#084d99]",
    textColor: "text-white",
    stats: "500+ Connections",
    description: "Connect professionally",
    iconBg: "bg-[#084d99]",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    icon: <FiTwitter />,
    color: "bg-[#1DA1F2]",
    hoverColor: "hover:bg-[#1991db]",
    textColor: "text-white",
    stats: "2.5k Followers",
    description: "Daily tech insights",
    iconBg: "bg-[#1991db]",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/yourchannel",
    icon: <FiYoutube />,
    color: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#cc0000]",
    textColor: "text-white",
    stats: "15k Subscribers",
    description: "Tutorials & guides",
    iconBg: "bg-[#cc0000]",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourprofile",
    icon: <FiInstagram />,
    color: "bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C]",
    hoverColor: "hover:from-[#6a2d91] hover:via-[#a02a6d] hover:to-[#b82558]",
    textColor: "text-white",
    stats: "8k Followers",
    description: "Behind-the-scenes",
    iconBg: "bg-[#C13584]",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@yourprofile",
    icon: <SiTiktok />,
    color: "bg-black",
    hoverColor: "hover:bg-gray-900",
    textColor: "text-white",
    stats: "50k Followers",
    description: "Short tech videos",
    iconBg: "bg-[#FE2C55]",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourpage",
    icon: <FiFacebook />,
    color: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#166fe5]",
    textColor: "text-white",
    stats: "3k Followers",
    description: "Community updates",
    iconBg: "bg-[#166fe5]",
  },
  {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/yourprofile",
    icon: <SiBuymeacoffee />,
    color: "bg-[#FFDD00]",
    hoverColor: "hover:bg-[#e6c700]",
    textColor: "text-[#5F3A00]",
    stats: "100+ Supporters",
    description: "Support my work",
    iconBg: "bg-[#FFDD00]",
    iconColor: "text-[#5F3A00]",
  },
];

const SocialMediaCards = ({
  className = "",
  columns = "grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4",
  animation = true,
  cardSize = "normal", // 'normal' or 'compact'
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.h2
            className="text-6xl font-bold mb-4 bg-gradient-to-r dark:text-primaryDark text-primary bg-clip-text "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Connect With Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Let&apos;s build connections! Follow my journey across platforms for
          daily tech insights, tutorials, and behind-the-scenes content.
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
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
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
  );
};

export default SocialMediaCards;
