import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import whatsapplogo from "../assets/icons8-whatsapp.svg";
import linkedin from "../assets/icons8-linkedin.svg";
import gmail from "../assets/icons8-gmail.svg";
import medium from "../assets/icons8-medium.svg";
import lock from "../assets/icons8-lock-64.png";

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
      {/* social links */}
      <div className="my-60 py-20"></div>
      {/* mail contact form */}
      <div className="mt-14">
        <div>
          <h1 className="text-4xl font-bold text-slate-800 my-10">
            Love to hear from you <br></br> Get in touch 👋
          </h1>
          {/* <p className="text-xs text-center">
            Message's are encrypted, following<br></br> end to end encryption
            mehtod
          </p>
          <img className="h-7 my-2" src={lock} alt="lock" /> */}
        </div>
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
            className="border border-slate-50 bg-slate-100 rounded p-2"
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
