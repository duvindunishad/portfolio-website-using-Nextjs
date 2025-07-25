import React from "react";
import Image from "next/image";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
import Stats from "./Stats";

const Bio = () => (
  <section className="grid w-full grid-cols-8 gap-12 p-8 bg-gradient-to-b rounded-lg shadow-lg sm:gap-8 sm:p-6">
    {/* Profile Image Section */}
    <div className="col-span-3 relative h-auto rounded-2xl overflow-hidden shadow-md border border-gray-300 dark:border-gray-700 bg-light dark:bg-dark p-4 xl:col-span-4 md:col-span-8">
      <div className="absolute top-2 left-2 -z-10 w-[102%] h-[103%] rounded-2xl bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-200 dark:to-gray-400" />
      <Image
        src={profilePic}
        alt="Duvindu Nishad"
        className="rounded-2xl w-full h-auto object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    {/* Biography Text Section */}
    <div className="col-span-5 flex flex-col items-start justify-center space-y-4 text-gray-800 dark:text-gray-300 md:col-span-8 xl:col-span-4">
      <h2 className="text-lg font-bold uppercase text-gray-700 dark:text-gray-200 tracking-wide">
        Biography
      </h2>
      <p>
        I'm <strong>Duvindu Nishad</strong>, a dedicated Software Engineer
        specializing in full stack development. Holding a BSc. (Hons) in
        Software Engineering from Plymouth University, I combine academic rigor
        with practical expertise to deliver robust solutions.
      </p>
      <p>
        As an active contributor to the FOSS Community at NSBM Green University
        and creator of
        <strong> Digitalcodehub</strong> YouTube channel, I'm passionate about
        knowledge sharing and building educational coding resources.
      </p>
      <p>
        My technical arsenal includes modern frameworks like React, Angular, and
        Node.js, complemented by strong database skills in MySQL and MongoDB. I
        thrive on transforming complex problems into elegant, user-centric
        solutions.
      </p>
    </div>

    {/* Stats Section */}
    <div className="col-span-8 flex items-center justify-center md:col-span-8">
      <Stats />
    </div>
  </section>
);

export default Bio;
