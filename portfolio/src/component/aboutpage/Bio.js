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
      <p className="text-base font-medium leading-relaxed">
        I am Duvindu Nishad, a passionate Software Engineer specializing in full stack development,
        with a BSc. (Hons) in Software Engineering from Plymouth University.
      </p>
      <p className="text-base font-medium leading-relaxed">
        Throughout my academic and professional journey, I have undertaken several impactful
        projects, showcasing proficiency in modern development tools.
      </p>
      <p className="text-base font-medium leading-relaxed">
        I am currently seeking an entry-level position or internship to collaborate with
        cross-functional teams and gain hands-on experience in software development.
      </p>
    </div>

    {/* Stats Section */}
    <div className="col-span-8 flex items-center justify-center md:col-span-8">
      <Stats />
    </div>
    
  </section>
);

export default Bio;
