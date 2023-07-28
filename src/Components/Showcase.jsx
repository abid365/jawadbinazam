import React from "react";
import ProjectCard from "../Sub-components/ProjectCard";

const Showcase = () => {
  return (
    <div className="my-36 py-5">
      <h1 className="text-4xl text-black font-bold">
        <span className="text-red-400"># </span>Projects
      </h1>
      {/* project cards */}
      <div className="flex justify-between">
        <ProjectCard
          heading={"Front-End"}
          subheading={"Hello eowle lorem impus mas solo tdi ajdjakja "}
        ></ProjectCard>
        <ProjectCard heading={"Back-End"}></ProjectCard>
        <ProjectCard heading={"Full-Stack"}></ProjectCard>
      </div>
    </div>
  );
};

export default Showcase;
