import React from "react";
import { BsArrowRightShort, BsArrow90DegDown } from "react-icons/bs";
import reactjs from "../assets/icons8-react-js.svg";
import tailwind from "../assets/icons8-tailwindcss.svg";
import nodejs from "../assets/icons8-nodejs.svg";
import git from "../assets/icons8-git.svg";
import firebase from "../assets/icons8-firebase.svg";
import express from "../assets/icons8-express-js.svg";
import mongodb from "../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
import javascript from "../assets/icons8-javascript.svg";
import bootstrap from "../assets/icons8-bootstrap.svg";

const AboutMe = () => {
  return (
    <div className="my-20 pt-10" id="about">
      <h1 className="text-4xl font-bold text-black">
        <span className="text-red-400">#</span> About Me{" "}
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 items-center">
        {/* first grid column */}
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
        {/* second grid column */}
        <div>
          <h1 className="text-center text-slate-600 text-sm lg:my-3 my-5">
            Technologies that I know
          </h1>
          <div className="grid grid-cols-2  lg:grid-cols-3 lg:gap-4 gap-3 items-center place-items-center">
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-3 h-1/2"
              src={reactjs}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={tailwind}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={nodejs}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={git}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={firebase}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={express}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={mongodb}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={javascript}
              alt=""
            />
            <img
              className="border border-slate-50 rounded-full bg-white drop-shadow-lg p-4 h-1/2"
              src={bootstrap}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
