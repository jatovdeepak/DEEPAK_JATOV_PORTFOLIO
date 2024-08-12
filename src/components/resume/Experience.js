import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Freelancer - (2022 - Present)"
            result="Remote"
            des="Developed and maintained various projects, including a social media app and a property sharing application, using modern web technologies and frameworks."
          />
          <ResumeCard
            title="Project Developer"
            subTitle="National Institute of Technology, Kurukshetra - (2022 - 2025)"
            result="India"
            des="Worked on several projects as part of the Master of Computer Applications curriculum, including a virtual assistant and a property details sharing app."
          />
          <ResumeCard
            title="Intern"
            subTitle="Various Companies - (2020 - 2022)"
            result="India"
            des="Gained experience through internships involving full-stack development, working with technologies such as ReactJS, NodeJS, and MongoDB."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Applications"
            subTitle="National Institute of Technology, Kurukshetra - (2022 - 2025)"
            result="India"
            des="Pursuing a Master's degree with a focus on full-stack development and advanced software solutions."
          />
          <ResumeCard
            title="Bachelor of Science - Computer Applications"
            subTitle="Chhindwara University - (2018 - 2022)"
            result="India"
            des="Completed undergraduate studies with a strong foundation in computer applications and programming."
          />
          <ResumeCard
            title="Senior School Certificate Examination, CBSE"
            subTitle="Jawahar Navodaya Vidyalaya Seoni - (2016)"
            result="India"
            des="Completed secondary education with a focus on core academic subjects and extracurricular activities."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
