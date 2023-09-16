import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { SiAboutdotme } from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";
import { BiNetworkChart } from "react-icons/bi";
import { BsCode } from "react-icons/bs";

const commonStyles = `font-semibold hover:border-b w-fit pb-1 tracking-wide`;

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="bg-[#fffafa] text-black px-10 h-20 flex items-center justify-between sticky top-0 z-50">
      <a href="#home">
        <h1 className="text-4xl font-extrabold">
          jwd<span className="text-red-400 text-4xl">.</span>
        </h1>
      </a>
      <div className="lg:flex md:flex hidden gap-10 text-sm items-center">
        <a className={commonStyles} href="#about">
          About
        </a>
        <a className={commonStyles} href="#work">
          Work
        </a>
        <a className={commonStyles} href="#contact">
          Contact
        </a>
        <a
          href="/public/Resume of Jawad Azam.pdf"
          download
          className="border rounded border-slate-400 px-4 pt-2 pb-1 font-bold bg-black text-white  hover:text-red-400"
        >
          Resume
        </a>
      </div>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "black",
          },
        }}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <Menu className="mt-14">
          <MenuItem
            className="font-semibold hover:text-red-400 w-fit pb-1"
            href="#about"
          >
            <SiAboutdotme className="inline-block"></SiAboutdotme> About
          </MenuItem>
          <MenuItem
            className="font-semibold hover:text-red-400 w-fit pb-1"
            href="#work"
          >
            <BsCode className="inline-block"></BsCode> Works
          </MenuItem>
          <MenuItem
            className="font-semibold hover:text-red-400 w-fit pb-1"
            href="#contact"
          >
            <BiNetworkChart className="inline-block"></BiNetworkChart> Contact
          </MenuItem>
          <MenuItem
            href="/public/Resume of Jawad Azam.pdf"
            download
            className="font-semibold hover:bg-white hover:text-red-400"
          >
            <HiOutlineDownload className="inline-block"></HiOutlineDownload>
            Resume
          </MenuItem>
        </Menu>
      </Sidebar>
      <button
        className="lg:hidden md:hidden block border border-slate-800 rounded-full px-3 pt-2 pb-[1.5px] font-semibold text-xs bg-slate-900 hover:bg-red-400 hover:text-white"
        onClick={() => setToggled(!toggled)}
      >
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
