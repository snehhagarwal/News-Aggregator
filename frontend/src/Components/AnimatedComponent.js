import React, { useState, useEffect } from "react";
import Home from "./Home";
import vid from "../Assets/vid1.mp4";
import Header from "./Header";
import Footer from "./Footer";
const AnimatedComponent = () => {
  const [visible, setVisible] = useState(true);
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setShowHome(true);
      }, );
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-full bg-black flex items-center justify-center ">
      {visible && (
          <div className="absolute inset-0 flex items-center justify-center h-screen w-screen fade-in-scale bg-opacity-15">
            <video
              src={vid}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        )}
      {showHome && (
        <div className="transition-opacity duration-1000 opacity-100 fade-in-scale w-full h-full">
          <Header></Header>
          <Home />
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default AnimatedComponent;
