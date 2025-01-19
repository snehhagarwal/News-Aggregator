import React from 'react';
import { motion } from 'framer-motion';
import { Home, LiveTv, Report, Settings } from '@mui/icons-material';
const SideBar = () => {
  return (
    <motion.div
      className="bg-bg1 h-screen  border-[0.5px] border-border shadow-xl"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 25 }}
    >
      <div className="text-white p-5">
        <motion.h1
          className="text-lg text-border pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}

        >
          MENU
        </motion.h1>
        <ul className="mt-4 space-y-3">
          <motion.li
            className="flex items-center text-xl hover:bg-hoverbg1 p-4 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Home className="mr-3" />
            Home
          </motion.li>

          <motion.li
            className="flex items-center text-xl hover:bg-hoverbg1 p-4 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <LiveTv className="mr-3" />
            Live Feed
          </motion.li>

          <motion.li
            className="flex items-center text-xl hover:bg-hoverbg1 p-4 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Report className="mr-3" />
            Breaking News
          </motion.li>

          <motion.li
            className="flex items-center text-xl hover:bg-hoverbg1 p-4 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Report className="mr-3" />
            Reports
          </motion.li>

          <motion.li
            className="flex items-center text-xl hover:bg-hoverbg1 p-4 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Settings className="mr-3" />
            Settings
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
