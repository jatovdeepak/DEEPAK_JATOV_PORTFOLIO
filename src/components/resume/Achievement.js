import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Regional Chess Tournament"
            subTitle="Regional Level - 2018"
            result="Success"
            des="Participated in a regional chess tournament, showcasing strategic thinking and problem-solving skills."
          />
          <ResumeCard
            title="School Captain"
            subTitle="Jawahar Navodaya Vidyalaya, Seoni (2016 - 2018)"
            result="Leadership Role"
            des="Led the student body, organized school events, and represented the school in various inter-school competitions."
          />
          <ResumeCard
            title="Sports Coordinator"
            subTitle="Shaurya Club (2016 - 2018)"
            result="NIT Kurukshetra"
            des="Organized and managed various sports events, fostering teamwork and leadership among students."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Independent Projects (2022 - Present)"
            result="India"
            des="Developed various full-stack applications, utilizing ReactJS, NodeJS, ExpressJS, and MongoDB, including a social media web app, virtual assistant, and property details sharing app."
          />
          <ResumeCard
            title="Python Developer"
            subTitle="Independent Projects (2022 - Present)"
            result="India"
            des="Created a Python-based virtual assistant leveraging NLP and system automation, along with advanced features for Windows systems."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Freelance Projects (2020 - 2022)"
            result="India"
            des="Designed and developed responsive front-end interfaces using ReactJS, HTML/CSS, and Material-UI, focusing on user experience and performance."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
