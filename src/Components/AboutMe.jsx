import React from "react";
import { BsArrowRightShort, BsArrow90DegDown } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="my-20 pt-10" id="about">
      <h1 className="text-3xl font-bold text-black">
        <span className="text-red-400">#</span>About Me
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
          <div className="grid grid-cols-3 lg:gap-4 gap-3 place-items-center">
            <img
              className="border border-slate-50 rounded-xl bg-white drop-shadow-lg p-4 h-2/3"
              src="/src/assets/icons8-react-js.svg"
              alt=""
            />
            <img
              className="border border-slate-50 rounded-xl bg-white drop-shadow-lg p-4 h-2/3"
              src="/src/assets/icons8-tailwindcss.svg"
              alt=""
            />
            <img
              className="border border-slate-50 rounded-xl bg-white drop-shadow-lg p-4 h-2/3"
              src="/src/assets/icons8-nodejs.svg"
              alt=""
            />
            <img
              className="border border-slate-50 rounded-xl bg-white drop-shadow-lg p-4 h-2/3"
              src="/src/assets/icons8-git.svg"
              alt=""
            />
            <img
              className="border border-slate-50 rounded-xl bg-white drop-shadow-lg p-4 h-2/3"
              src="/src/assets/icons8-firebase.svg"
              alt=""
            />
            <img
              className="border border-slate-50 rounded-xl bg-white drop-shadow-lg p-4 h-2/3"
              src="/src/assets/icons8-express-js.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
