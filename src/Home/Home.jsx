import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import Work from "../Components/Work";
import AnimatedCursor from "react-animated-cursor";
import { HashLoader } from "react-spinners";
import Contacts from "../Components/Contacts";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-50 via-white to-slate-100">
          <HashLoader color="#F87171" />
        </div>
      ) : (
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-100">
          <Navbar></Navbar>
          {/* main container */}
          <div className="px-10">
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <Work></Work>
            <Contacts></Contacts>
          </div>
          <AnimatedCursor />
        </div>
      )}
    </div>
  );
};

export default Home;
