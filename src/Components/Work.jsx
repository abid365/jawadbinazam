import React, { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Projects from "../Sub-components/Projects";

const Work = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="my-36 pt-10" id="work">
      <h1 className="text-3xl font-bold">
        <span className="text-red-400">#</span>Some Things I've Built
      </h1>
      {/* project showcase */}
      <div className="mt-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        {/* first grid column */}
        <div>
          <h1 className="text-slate-800 text-sm font-semibold tracking-wider my-4">
            Featured Project
          </h1>
          <h1 className="text-2xl text-slate-900 font-bold">
            LinguaMastery (LMS)
          </h1>
          <ul className="list-disc px-10 text-xs w-fit my-5">
            <li>A language learning website works as an LMS</li>
            <li>
              Three user roles, based on the user role the actions changes
            </li>
            <li>
              Used payment gateway, a student can enroll in a class after
              finishing the payment process
            </li>
          </ul>
          <ul className="flex gap-2 flex-wrap text-xs">
            <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
              React
            </li>
            <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
              Tailwind
            </li>
            <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
              Axios
            </li>
            <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
              JWT
            </li>
            <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
              MongoDB
            </li>
            <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
              Firebase
            </li>
          </ul>
          <div className="my-5 flex gap-5">
            <a
              target="_blank"
              href="https://github.com/abid365/linguamastery-fullstack-project/tree/main"
            >
              <FiGithub className="text-xl"></FiGithub>
            </a>
            <a target="_blank" href="https://b7a12-ec06e.web.app/">
              <FiExternalLink className="text-xl"></FiExternalLink>
            </a>
          </div>
        </div>
        {/* second geid column, swiper carousel */}
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="rounded-xl p-1 border border-slate-300 "
                src="https://i.ibb.co/NNy5HqJ/Screenshot-from-2023-06-30-21-35-00.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-xl p-1 border border-slate-300 "
                src="https://i.ibb.co/RHYC5bg/Screenshot-from-2023-06-30-21-41-08.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-xl p-1 border border-slate-300 "
                src="https://i.ibb.co/5LnHJZJ/Screenshot-from-2023-06-30-21-41-14.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-xl p-1 border border-slate-300 "
                src="https://i.ibb.co/9qyQc97/Screenshot-from-2023-06-30-21-41-46.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-xl p-1 border border-slate-300 "
                src="https://i.ibb.co/bB6scfX/Screenshot-from-2023-06-30-21-41-48.png"
                alt=""
              />
            </SwiperSlide>
            <div className="autoplay-progress hidden" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
      {/* second featured project */}
      <Projects
        title={"A Toy Marketplace"}
        li1={"It has dynamic routing"}
        li2={
          "A user can't access some fetaures without logging in, firebase authentication implemented. Logout, login, create user implemented"
        }
        li3={
          "MongoDb is used for crud operations, user can Add new items or manage existing items"
        }
        tech1={"React"}
        tech2={"MongoDB"}
        tech3={"Node.js"}
        tech4={"Express.js"}
        tech5={"Firebase"}
        repolink={"https://github.com/abid365/Gundamtoy-Client/tree/main"}
        sitelink={"https://gundam-toy.web.app/"}
        img1={
          "https://i.ibb.co/y0TMCHY/Screenshot-from-2023-07-01-09-56-31.png"
        }
        img2={
          "https://i.ibb.co/4J6VZpF/Screenshot-from-2023-07-01-09-56-41.png"
        }
        img3={
          "https://i.ibb.co/QHs8SWs/Screenshot-from-2023-07-01-09-56-45.png"
        }
        img4={
          "https://i.ibb.co/3TGLv6N/Screenshot-from-2023-07-01-09-56-50.png"
        }
        img5={
          "https://i.ibb.co/1fsVnnN/Screenshot-from-2023-07-01-09-57-06.png"
        }
      ></Projects>
      {/* third featured project */}
      <Projects
        title={"A Job Hunting Website"}
        li1={"Inclueds statistical graph data"}
        li2={"Deployed in netlify"}
        li3={"Mobile Responsive Design"}
        tech1={"React"}
        tech2={"Tailwind CSS"}
        tech3={"React Router"}
        repolink={"https://github.com/abid365/joblsitingsite"}
        sitelink={"https://bejewelled-hamster-428050.netlify.app/"}
        img1={
          "https://i.ibb.co/ZLF1CNt/Screenshot-from-2023-07-01-11-02-17.png"
        }
        img2={
          "https://i.ibb.co/Pzr3VcP/Screenshot-from-2023-07-01-11-02-22.png"
        }
        img3={
          "https://i.ibb.co/KK1XPVn/Screenshot-from-2023-07-01-11-02-30.png"
        }
        img4={
          "https://i.ibb.co/44PjTwT/Screenshot-from-2023-07-01-11-02-39.png"
        }
        img5={
          "https://i.ibb.co/6n81Hns/Screenshot-from-2023-07-01-11-02-35.png"
        }
      ></Projects>
    </div>
  );
};

export default Work;
