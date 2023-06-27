import React from "react";
import Navbar from "../Shared/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* main container */}
      <div className="px-10">
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
};

export default Home;
