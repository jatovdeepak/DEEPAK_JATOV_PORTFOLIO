import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Deepak Jatov</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a dedicated MERN Stack Developer, With hands-on experience in developing full-stack web applications, I am skilled in using ReactJS, NodeJS, ExpressJS, and MongoDB to create dynamic and responsive user experiences.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+919009022765</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jatovdeepak@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <span className="bannerIcon">
              <FaFacebookF onClick={() => window.location.href = "https://www.facebook.com/ritik.jatov?mibextid=LQQJ4d"}/>
            </span>
            <span className="bannerIcon">
              <FaTwitter onClick={() => window.location.href = "https://x.com/DeepakJato56442"}/>
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn onClick={() => window.location.href = "https://www.linkedin.com/in/deepak-jatov-750008208/"} />
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft