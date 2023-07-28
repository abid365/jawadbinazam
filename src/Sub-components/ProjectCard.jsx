import React from "react";

const ProjectCard = ({
  heading,
  subheading,
  tech_one,
  tech_two,
  tech_three,
  projectLink,
}) => {
  return (
    <div>
      <style>
        {`
    .master {
      transition: 0.5s box-shadow;
    }
    .master:hover{
      box-shadow: 3px 5px #282C35;
    }

          `}
      </style>
      <div className="border border-red-400 rounded-lg py-5 px-2  my-10 master bg-white">
        <h1 className="text-xl font-bold">{heading}</h1>
        <p className="">{subheading}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
