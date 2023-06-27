import React from "react";
import Navbar from "../Shared/Navbar";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* main container */}
      <div className="px-10">
        <HeroSection></HeroSection>
      </div>
    </div>
  );
};

export default Home;
