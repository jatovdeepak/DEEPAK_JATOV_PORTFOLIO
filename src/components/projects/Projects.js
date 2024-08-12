import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MEMORIES - Social Media Web App"
          des="A full-stack social media web application built with the MERN stack, allowing users to create, read, update, and delete posts, similar to platforms like Facebook and Instagram."
          src={projectOne}
        />
        <ProjectsCard
          title="RENTIFY - Property Sharing App"
          des="A web application designed to facilitate property transactions between buyers and sellers, featuring full CRUD operations and a user-friendly interface developed with ReactJS and Material-UI."
          src={projectTwo}
        />
        <ProjectsCard
          title="BUDDY AI - Virtual Assistant"
          des="A Python-based virtual assistant for Windows, integrating speech recognition, NLP, and system automation to streamline daily tasks and improve productivity."
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects;
