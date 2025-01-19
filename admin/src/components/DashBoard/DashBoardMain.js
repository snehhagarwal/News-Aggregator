import React from 'react';
import SideBar from './SideBar';
import DashBoardHome from './DashBoardHome';

const DashBoardMain = () => {
  return (
    <div className='flex bg-gradient-to-b from-gray-900 to-gray-800 '>
      <div className='w-[20%]'>
        <SideBar/>
      </div>

      <div className='bg-[#232323] w-[80%] h-screen'>
        <DashBoardHome/>
      </div>
    </div>
  );
};

export default DashBoardMain;
