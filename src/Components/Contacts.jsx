import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import whatsapplogo from "../assets/icons8-whatsapp.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import gmail from "../assets/icons8-gmail.svg";
import medium from "../assets/icons8-medium.svg";

const Contacts = () => {
  // send mail function
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2zcfdms",
        "template_109uui5",
        form.current,
        "4e9mL2GiajNKys8R5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="my-36 pt-10">
      <h1 className="text-5xl font-extrabold text-slate-800 text-center tracking-tighter capitalize">
        Get in touch
      </h1>
      <p className="text-center my-3 text-xs">
        Fostering Meaningful Connections: Inspire and<br></br> Transform
        Together.
      </p>
      <div className="grid lg:grid-cols-4 lg:gap-3 gap-4 grid-cols-1 place-items-center mt-20">
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
      {/* mail contact form */}
      <div className="mt-14">
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            className="border border-slate-700 rounded p-1"
            type="text"
            name="user_name"
          />
          <label className="mt-3">Email</label>
          <input
            className="border border-slate-700 rounded p-1"
            type="email"
            name="user_email"
          />
          <label className="mt-3">Message</label>
          <textarea
            className="border border-slate-800 rounded p-1"
            name="message"
          />
          <input
            className="mt-5 border border-slate-50 w-fit rounded-md pt-2 pb-1 px-5 bg-slate-900 text-white"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
