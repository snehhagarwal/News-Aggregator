import React from "react";
import ReporterSideBar from "./ReporterSideBar";
import DashBoardHome from "./../DashBoardHome";
import AddNews from "../AddNews";
const ReporterDashBoardMain = () => {
  return (
    <div className="flex bg-gradient-to-b from-gray-900 to-gray-800 ">
      <div className="w-[20%]">
        <ReporterSideBar />
      </div>

      <div className="bg-[#232323] w-[80%] h-screen">
        {/* <DashBoardHome/> */}
        <AddNews />
      </div>
    </div>
  );
};

export default ReporterDashBoardMain;
