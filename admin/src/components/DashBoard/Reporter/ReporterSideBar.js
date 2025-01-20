import React from 'react';
import { motion } from 'framer-motion';
import { Home, LiveTv, Report } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const SideBar = () => {
  return (
    <motion.div
      className="bg-gray-900 h-screen border-r border-gray-700 shadow-lg"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 25 }}
    >
      <div className="text-white p-6">  
        <motion.h1
          className="text-2xl font-semibold border-b border-gray-700 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          MENU
        </motion.h1>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4">
          {/* Home */}
          <motion.li
            className="flex items-center text-lg hover:bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <Home className="mr-3 text-blue-400" />
            Home
          </motion.li>

          {/* Live Feed */}
          <motion.li
            className="flex items-center text-lg hover:bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <LiveTv className="mr-3 text-green-400" />
            Live Feed
          </motion.li>
          <motion.li
            className="flex items-center text-lg hover:bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <AddCircleOutlineIcon className="mr-3 text-yellow-400" />
            Add News
          </motion.li>

          <motion.li
            className="flex items-center text-lg hover:bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <Report className="mr-3 text-red-400" />
            Reports
          </motion.li>

          <motion.li
            className="flex items-center text-lg hover:bg-gray-800 p-4 rounded-lg cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <LogoutIcon className="mr-3 text-purple-400" />
            Logout
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
