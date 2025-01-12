import React, { useState, useEffect } from "react";
import Home from "./Home";
import img from './/../Assets/Logo.png';
const AnimatedComponent = () => {
  const [visible, setVisible] = useState(true); 
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setShowHome(true);
      },0); 
    }, 2000); 
    return()=>clearTimeout(timer);
  },[]);
  return (
<div className="w-full h-full bg-gradient-to-r from-custom-start via-custom-mid-1 via-custom-mid-2 via-custom-mid-3 to-custom-end flex items-center justify-center bg-opacity-20">
      {visible && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-custom-start via-custom-mid-1 via-custom-mid-2 via-custom-mid-3 to-custom-end flex items-center justify-center h-screen w-screen fade-in-scale bg-opacity-15"
        >
            <img src={img}
            alt=""
            className="object-cover w-2/5 h-auto ease-in-out"
            ></img>
          
        </div>
      )}
      {showHome && (
        <div className="transition-opacity duration-1000 opacity-100 fade-in-scale w-full h-full">
          <Home />
        </div>
      )}
    </div>
  );
};

export default AnimatedComponent;
