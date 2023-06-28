import React from "react";
import Navbar from "../Shared/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import Work from "../Components/Work";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 via-white to-slate-100">
      <Navbar></Navbar>
      {/* main container */}
      <div className="px-10">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Work></Work>
      </div>
    </div>
  );
};

export default Home;
