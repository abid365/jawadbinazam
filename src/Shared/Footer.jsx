import React from "react";
import { BsLinkedin, BsMedium, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black px-10 pt-10">
      {/* social links */}
      <div className="flex gap-3 items-center ps-1">
        <h1 className="text-xl font-bold text-white">
          jwd<span className="text-red-400">.</span>
        </h1>
        <a href="https://www.linkedin.com/in/jawadbinazam/">
          <FaLinkedinIn className="inline-block text-white"></FaLinkedinIn>
        </a>
        <a href="https://jawadbinazam.medium.com/">
          <BsMedium className="inline-block text-white"></BsMedium>
        </a>
        <a href="https://twitter.com/foxbate71">
          <BsTwitter className="inline-block text-white"></BsTwitter>
        </a>
        <a href="https://wa.me/+8801828909335">
          <BsWhatsapp className="inline-block text-white"></BsWhatsapp>
        </a>
      </div>
      {/* location */}
      <div>
        <h1 className="text-white text-xs mt-2">Chattogram, Bangladesh</h1>
        <h1 className="text-white text-xs mt-2">Phone: +8801828909335</h1>
      </div>
      {/* copyright */}
      <div>
        <p className="text-white text-xs">
          <span className="text-lg">©</span> 2023{" "}
          <span className="font-bold">
            jwd<span className="text-red-400">.</span>
          </span>
          , All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
