import React, { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Projects = ({
  title,
  li1,
  li2,
  li3,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  repolink,
  sitelink,
  img1,
  img2,
  img3,
  img4,
  img5,
}) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="my-16 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
      {/* first grid column */}
      <div>
        <h1 className="text-slate-800 text-sm font-semibold tracking-wider my-4">
          Featured Project
        </h1>
        <h1 className="text-2xl text-slate-900 font-bold">{title}</h1>
        <ul className="list-disc px-10 text-xs w-fit my-5">
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
        <ul className="flex gap-2 flex-wrap text-xs">
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            {tech1}
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            {tech2}
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            {tech3}
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            {tech4}
          </li>
          <li className="border rounded-md p-1 border-[#e2e2e2] bg-slate-900 text-white">
            {tech5}
          </li>
          <li>{tech6}</li>
        </ul>
        <div className="my-5 flex gap-5">
          <a target="_blank" href={repolink}>
            <FiGithub className="text-xl"></FiGithub>
          </a>
          <a target="_blank" href={sitelink}>
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
              src={img1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-xl p-1 border border-slate-300 "
              src={img2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-xl p-1 border border-slate-300 "
              src={img3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-xl p-1 border border-slate-300 "
              src={img4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-xl p-1 border border-slate-300 "
              src={img5}
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
  );
};

export default Projects;
