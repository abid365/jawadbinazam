import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="bg-black text-white px-10 h-20 flex items-center justify-between sticky top-0 z-50">
      <a href="#home">
        <h1 className="text-4xl font-extrabold">
          jwd<span className="text-red-400 text-4xl">.</span>
        </h1>
      </a>
      <div className="lg:flex md:flex hidden gap-10 text-xs items-center">
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
          download
          className="border rounded border-slate-400 px-4 pt-2 pb-1 font-bold hover:bg-white hover:text-red-400"
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
        <Menu
          className="mt-14"
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#1b191b" : "#FFFFFF",
                  backgroundColor: active ? "#FFFFFF" : undefined,
                };
            },
          }}
        >
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <button
        className="lg:hidden md:hidden block border border-slate-800 rounded-full px-3 pt-2 pb-1 font-bold text-xs bg-slate-900 hover:bg-red-400 hover:text-white"
        onClick={() => setToggled(!toggled)}
      >
        Menu
      </button>
    </nav>
  );
};

export default Navbar;
