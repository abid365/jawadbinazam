import React from "react";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="lg:mt-14 mt-10 pb-20">
      <h1 className="text-slate-700">👋 Hi, my name is</h1>
      <h1 className="tracking-tight text-6xl font-bold mt-8">Jawad</h1>
      <h1 className="tracking-tighter text-6xl font-extrabold text-slate-800">
        I create wonders<br></br> for the web.
      </h1>
      <p className="w-1/2">
        I'm a webdeveloper specializing in building exceptional digital
        experience. As a mern stack developer I'm focused to build sleek and
        optimized web applications.
      </p>
      <button className="btn px-6 pt-4 pb-2 border border-slate-800 rounded-md mt-10 hover:bg-slate-50">
        <a href="https://github.com/abid365" target="_blank">
          <FaGithub className="inline-block text-2xl pb-1"></FaGithub> Checkout
          My Github
        </a>
      </button>
    </div>
  );
};

export default HeroSection;
