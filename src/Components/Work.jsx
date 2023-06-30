import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Work = () => {
  return (
    <div className="my-20 pt-10" id="work">
      <h1 className="text-3xl font-bold">
        <span className="text-red-400">#</span>Some Things I've Built
      </h1>
      {/* project showcase */}
      <div className="my-16">
        <h1 className="text-slate-800 text-sm font-semibold tracking-wider my-4">
          Featured Project
        </h1>
        <h1 className="text-2xl text-slate-900 font-bold">
          LinguaMastery (LMS)
        </h1>
        <ul className="list-disc px-10 text-xs w-fit my-5">
          <li>A language learning website works as an LMS</li>
          <li>Three user roles, based on the user role the actions changes</li>
          <li>
            Used payment gateway, a student can enroll in a class after
            finishing the payment process
          </li>
        </ul>
        <ul className="flex gap-2 flex-wrap text-xs">
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            React
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            Tailwind
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            Axios
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            JWT
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            MongoDB
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            Firebase
          </li>
        </ul>
        <div className="my-5 flex gap-5">
          <a
            target="_blank"
            href="https://github.com/abid365/linguamastery-fullstack-project/tree/main"
          >
            <FiGithub className="text-xl"></FiGithub>
          </a>
          <a target="_blank" href="https://b7a12-ec06e.web.app/">
            <FiExternalLink className="text-xl"></FiExternalLink>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
