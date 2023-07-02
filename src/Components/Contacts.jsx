import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import whatsapplogo from "../assets/icons8-whatsapp.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import gmail from "../assets/icons8-gmail.svg";
import medium from "../assets/icons8-medium.svg";
import lock from "../assets/icons8-lock-64.png";
import { BsArrowUpRight } from "react-icons/bs";

const Contacts = () => {
  // send mail function
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2zcfdm",
        "template_zfotyiy",
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
      <div>
        <h1 className="text-4xl font-bold text-slate-800 my-10">
          Love to hear from you,<br></br> Get in touch 👋
        </h1>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="flex items-center gap-4">
            <div className="flex flex-col w-full">
              <label className="mt-3 tracking-wide font-bold text-slate-800">
                Your Name
              </label>
              <input
                className="border border-slate-200sss bg-white rounded p-2 w-full"
                type="text"
                name="user_name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mt-3 tracking-wide font-bold text-slate-800">
                Your Email
              </label>
              <input
                className="border border-slate-200 bg-white p-2"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <label className="mt-3 tracking-wide font-bold text-slate-800">
            Message
          </label>
          <textarea
            className="border border-slate-200 bg-white p-2"
            name="message"
          />
          <button
            className="mt-5 border border-slate-50 w-2/4 rounded pt-2 pb-1 px-5 bg-slate-800 text-white"
            type="submit"
          >
            Just Send <BsArrowUpRight className="inline-block"></BsArrowUpRight>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
