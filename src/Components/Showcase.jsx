import React from "react";
import { TbHexagonNumber3 } from "react-icons/tb";
import { CiFolderOn } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";

const Showcase = () => {
  return (
    <div className="my-36 py-5">
      <h1 className="text-4xl text-black font-bold">
        <span className="text-red-400"># </span>Projects
      </h1>
      {/* project cards */}
      <div>
        <div className="border border-slate-60 rounded-md p-7 lg:w-1/4 w-fit my-10 shadow-md">
          <div className="my-5 flex justify-between items-center">
            <CiFolderOn className="text-5xl text-red-400"></CiFolderOn>
            <a href="">
              <BiLinkExternal className="text-2xl"></BiLinkExternal>
            </a>
          </div>
          <h1 className="text-xl font-bold text-slate-700">
            Integrating Stripe payment with a language learning website
          </h1>
          <p className="my-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            eos.
          </p>
          <div className="text-xs flex flex-wrap gap-2 mt-3">
            <span>Lorem</span>
            <span>Lorem</span>
            <span>Lorem</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
