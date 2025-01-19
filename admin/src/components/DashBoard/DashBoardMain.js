import React from 'react';
import SideBar from './SideBar';
import DashBoardHome from './DashBoardHome';

const DashBoardMain = () => {
  return (
    <div className='flex bg-bg1'>
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
