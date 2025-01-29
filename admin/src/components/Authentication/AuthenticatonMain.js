import React, { useState } from "react";
import AdministratorLogin from "./AdministratorLogin";
import ReporterLogin from "./ReporterLogin";
const AuthenticationMain = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const handleToggle = () => {
    setIsAdmin(!isAdmin); 
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div
        className={`w-1/2 h-full transition-transform duration-500 ease-in-out ${
          isAdmin ? "bg-black" : "bg-rose-400"
        }`}
        onClick={handleToggle}
      >
        <div className="flex justify-center items-center w-full h-full text-white text-3xl font-bold cursor-pointer">
          {isAdmin ? "Administrator Login" : "Reporter Login"}
        </div>
      </div>
      <div
        className={`w-1/2 h-full transition-transform duration-500 ease-in-out ${
          isAdmin ? "bg-rose-400" : "bg-black"
        }`}
      >
        {isAdmin ? <AdministratorLogin /> : <ReporterLogin />}
      </div>
    </div>
  );
};

export default AuthenticationMain;
