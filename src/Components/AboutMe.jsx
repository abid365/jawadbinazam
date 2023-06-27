import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-20" id="about">
      <h1 className="text-3xl font-bold text-black">
        <span className="text-red-400">#</span>About Me
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="my-5">
            Hello! My name is Jawad Bin Azam and I enjoy creating things that
            survive on the internet. My interest became more strong when I
            decided to create a custom blogging site where everyone can post
            there writings and share those things on different platfroms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
