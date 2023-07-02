import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-10 h-20 flex items-center justify-between sticky top-0 z-50">
      <a href="#home">
        <h1 className="text-4xl font-extrabold">
          jwd<span className="text-red-400 text-4xl">.</span>
        </h1>
      </a>
      <div className="flex gap-10 text-xs items-center">
        <a className="font-bold hover:border-b w-fit pb-1" href="#about">
          About
        </a>
        <a className="font-bold hover:border-b w-fit pb-1" href="#work">
          Work
        </a>
        <a className="font-bold hover:border-b w-fit pb-1" href="#contact">
          Contact
        </a>
        <a
          href="/public/Resume of Jawad Azam.pdf"
          target="_blank"
          download
          className="border rounded border-slate-400 px-4 pt-2 pb-1 font-bold hover:bg-white hover:text-red-400"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
