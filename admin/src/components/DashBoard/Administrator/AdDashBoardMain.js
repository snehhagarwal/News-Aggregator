import React, { useState } from "react";
import AdSideBar from "./AdSideBar";
import AdministratorHomeDashBoard from "./AdministratorHomeDashBoard";
import AddNews from "./AddNews";
import ApprovalNews from "./ApprovalNews";
import AddNewsVid from "./AddNewsVid";
import AddReporter from "./AddReporter";
import Reports from "./Reports";

const AdDashBoardMain = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <AdministratorHomeDashBoard />;
      case "addNewsVid":
        return <AddNewsVid />;
      case "approveNews":
        return <ApprovalNews></ApprovalNews>;
      case "addNewsPhoto":
        return <AddNews />;
      case "addReporter":
        return <AddReporter />;
      case "reports":
        return <Reports />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="flex bg-gradient-to-b from-gray-900 to-gray-800 h-screen">
      <div className="w-[20%] fixed top-0 left-0 h-screen bg-gray-900 shadow-md">
        <AdSideBar setActivePage={setActivePage} />
      </div>
      <div className="ml-[20%] w-[80%] h-screen bg-[#232323] overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default AdDashBoardMain;
