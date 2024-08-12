import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaRobot , FaPlug , FaDatabase  } from "react-icons/fa";
import { SiHomeassistant , SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Offer" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full-Stack Web Development"
          des="Specializing in building dynamic and responsive web applications using the MERN stack—MongoDB, ExpressJS, ReactJS, and NodeJS."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Virtual Assistant Development"
          des="Creating intelligent, Python-based virtual assistants to simplify and automate daily tasks, integrating advanced NLP and system control features."
          icon={<FaRobot />}
        />
        <Card
          title="Property Listing Applications"
          des="Developing robust platforms like Rentify to facilitate seamless property transactions between buyers and sellers, with full CRUD operations."
          icon={<SiHomeassistant />}
        />
        <Card
          title="UI/UX Design"
          des="Designing intuitive and visually appealing user interfaces using ReactJS and Material-UI, focused on enhancing user experience and accessibility."
          icon={<SiAntdesign />}
        />
        <Card
          title="API Integration"
          des="Expertise in integrating various APIs into applications to enhance functionality, including social media features, payment gateways, and more."
          icon={<FaPlug />}
        />
        <Card
          title="Database Management"
          des="Skilled in managing cloud-based databases like MongoDB and MySQL, ensuring data integrity, security, and optimal performance."
          icon={<FaDatabase />}
        />
      </div>

    </section>
  );
}

export default Features