import React from "react";
import AnimatedNumbers from "../AnimateNumber";

const Stats = () => (
  <div className="flex gap-8 items-center justify-center md:gap-6 flex-wrap">
    <StatItem value={13} label="Satisfied Clients" />
    <StatItem value={6} label="Projects Completed" />
    <StatItem value={4} label="Years of Experience" />
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <span className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
      <AnimatedNumbers value={value} />+
    </span>
    <h2 className="text-xl font-medium capitalize text-gray-700 dark:text-gray-300 md:text-lg sm:text-base xs:text-sm">
      {label}
    </h2>
  </div>
);

export default Stats;
