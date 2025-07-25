import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "../component/Layout";
import AnimatedText from "../component/AnimatedText";
import TransitionEffect from "../component/TransitionEffect";
import Skills from "../component/aboutpage/Skills";
import Experience from "../component/aboutpage/Experience";
import Education from "../component/aboutpage/Education";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
    return () => springValue.destroy();
  }, [springValue, value]);

  return <span ref={ref} />;
};

const AboutPage = () => {
  const stats = [
    { value: 13, label: "Satisfied Clients" },
    { value: 6, label: "Projects Completed" },
    { value: 4, label: "Years of Experience" },
  ];

  return (
    <>
      <Head>
        <title>Duvindu Nishad | About</title>
        <meta
          name="description"
          content="Professional profile of Duvindu Nishad, Full Stack Developer with expertise in modern web technologies"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16 pb-32">
          {/* Hero Section */}
          <section className="w-full mb-24">
            <AnimatedText
              text="Passion Fuels Purpose"
              className="mb-16 text-7xl font-bold text-center lg:text-6xl md:text-5xl sm:text-4xl"
            />

            <div className="grid grid-cols-8 gap-16 md:gap-8 sm:gap-4">
              {/* Biography */}
              <div className="col-span-3 flex flex-col space-y-6 xl:col-span-4 md:col-span-8 md:order-2">
                <h2 className="text-xl font-semibold uppercase tracking-wider">
                  Professional Profile
                </h2>

                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    I&apos;m <strong>Duvindu Nishad</strong>, a dedicated
                    Software Engineer specializing in full stack development.
                    Holding a BSc. (Hons) in Software Engineering from Plymouth
                    University, I combine academic rigor with practical
                    expertise to deliver robust solutions.
                  </p>
                  <p>
                    As an active contributor to the FOSS Community at NSBM Green
                    University and creator of
                    <strong> Digitalcodehub</strong> YouTube channel, I&apos;m
                    passionate about knowledge sharing and building educational
                    coding resources.
                  </p>
                  <p>
                    My technical arsenal includes modern frameworks like React,
                    Angular, and Node.js, complemented by strong database skills
                    in MySQL and MongoDB. I thrive on transforming complex
                    problems into elegant, user-centric solutions.
                  </p>
                </div>
              </div>

              {/* Profile Image */}
              <div className="col-span-3 relative xl:col-span-4 md:col-span-8 md:order-1">
                <div className="relative h-full w-full rounded-xl overflow-hidden border-2 border-black shadow-2xl">
                  <Image
                    src={profilePic}
                    alt="Duvindu Nishad - Full Stack Developer"
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="absolute -z-10 -right-3 -top-3 w-full h-full rounded-xl bg-black" />
              </div>

              {/* Stats */}
              <div className="col-span-2 flex flex-col justify-between xl:col-span-8 xl:flex-row xl:space-y-0 xl:space-x-8 xl:mt-12 md:order-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-end xl:items-center"
                  >
                    <span className="text-6xl font-bold md:text-5xl sm:text-4xl">
                      <AnimatedNumber value={stat.value} />+
                    </span>
                    <h3 className="text-lg font-medium mt-2 text-gray-700 md:text-base">
                      {stat.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Technical Expertise
            </h2>
            <Skills />
          </section>

          {/* Experience Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Professional Journey
            </h2>
            <Experience />
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Academic Background
            </h2>
            <Education />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
