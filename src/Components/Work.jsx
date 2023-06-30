import React from "react";

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
        <ul>
          <li>React</li>
          <li>Tailwind</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
