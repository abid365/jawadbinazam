import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

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
          <p className="my-5">
            Here are few technologies that I've been working with<br></br>{" "}
            reccently:
          </p>
          <div className="flex gap-10">
            <ul className="text-sm">
              <li className="my-2">
                <BsArrowRightShort className="inline-block text-red-400" />{" "}
                JavaScript (ES6+)
              </li>
              <li className="my-2">
                <BsArrowRightShort className="inline-block text-red-400" />{" "}
                React.js
              </li>
              <li className="my-2">
                <BsArrowRightShort className="inline-block text-red-400" />{" "}
                Node.js
              </li>
            </ul>
            <ul className="text-sm">
              <li className="my-2">
                <BsArrowRightShort className="inline-block text-red-400" />{" "}
                MongoDB
              </li>
              <li className="my-2">
                <BsArrowRightShort className="inline-block text-red-400" />{" "}
                Framer Motion
              </li>
              <li className="my-2">
                <BsArrowRightShort className="inline-block text-red-400" />{" "}
                Firebase
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
