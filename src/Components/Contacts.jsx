import React from "react";
import whatsapplogo from "../assets/icons8-whatsapp.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import gmail from "../assets/icons8-gmail.svg";
import medium from "../assets/icons8-medium.svg";

const Contacts = () => {
  return (
    <div className="my-20 pt-10">
      <h1 className="text-3xl font-bold text-black">
        <span className="text-red-400">#</span>Buzz Me When You Can
      </h1>
      <div className="grid lg:grid-cols-4 lg:gap-3 gap-4 grid-cols-1 place-items-center mt-14">
        <div className="flex items-center border border-slate-50 bg-white w-fit p-2 drop-shadow-md rounded-md">
          <img className="h-7" src={gmail} alt="gmail logo" />
          <h1 className="text-xs px-2 ">abidibnazam@gmail.com</h1>
        </div>
        <div className="flex items-center border border-slate-50 bg-white w-fit p-2 drop-shadow-md rounded-md">
          <a href="https://jawadbinazam.medium.com">
            <img className="h-7" src={medium} alt="medium.com" />
          </a>
          <h1 className="text-xs px-2 tracking-tight">
            medium.com/@jawadbinazam
          </h1>
        </div>
        <div className="flex items-center border border-slate-50 bg-white w-fit p-2 drop-shadow-md rounded-md">
          <img className="h-7" src={whatsapplogo} alt="whatsapp logo" />
          <a className="text-xs pt-1 px-2" href="https://wa.me/+8801828909335">
            For any query, ask me
          </a>
        </div>
        <div className="flex items-center border border-slate-50 bg-white w-fit p-2 drop-shadow-md rounded-md">
          <img className="h-7" src={linkedin} alt="whatsapp logo" />
          <a
            className="text-xs pt-1 px-2"
            href="https://www.linkedin.com/in/jawadbinazam/"
          >
            Let's connect in linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
