import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Applications (MCA)"
            subTitle="National Institute of Technology, Kurukshetra (2022 - 2025)"
            result="CGPA: 6.7"
            des="Focused on advanced concepts of computer applications, programming, software development, and systems management."
          />
          <ResumeCard
            title="Bachelor of Science in Computer Application"
            subTitle="Chhindwara University (2019 - 2022)"
            result="Percentage: 69%"
            des="Covered a broad spectrum of computer science subjects including programming languages, databases, and software engineering."
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="Jawahar Navodaya Vidyalaya, Seoni (2016 - 2018)"
            result="Percentage: 74%"
            des="Completed with a focus on Science, developing a strong foundation in mathematics, physics, and computer science."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sports Coordinator"
            subTitle="Shaurya Club (2016 - 2018)"
            result="NIT Kurukshetra"
            des="Organized and managed various sports events, fostering teamwork and leadership among students."
          />
          <ResumeCard
            title="School Captain"
            subTitle="Jawahar Navodaya Vidyalaya, Seoni (2016 - 2018)"
            result="Leadership Role"
            des="Led the student body, coordinated school events, and represented the school in various inter-school competitions."
          />
          <ResumeCard
            title="Regional Chess Player"
            subTitle="Regional Chess Tournament"
            result="Regional Level"
            des="Participated in regional chess tournaments, demonstrating strategic thinking and problem-solving skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
