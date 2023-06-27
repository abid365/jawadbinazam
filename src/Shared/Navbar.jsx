import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-10 h-20 flex items-center justify-between">
      <h1 className="text-4xl font-extrabold">
        jawad<span className="text-red-400 text-4xl">.</span>
      </h1>
      <div className="flex gap-10 text-xs">
        <a className="font-bold hover:border-b w-fit pb-1" href="">
          About
        </a>
        <a className="font-bold hover:border-b w-fit pb-1" href="">
          Work
        </a>
        <a className="font-bold hover:border-b w-fit pb-1" href="">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
