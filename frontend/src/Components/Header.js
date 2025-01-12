import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 dark:bg-gray-900 text-white px-6 py-8">
      <motion.div
        className="text-2xl font-bold cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Global Pulse
      </motion.div>
      <nav className="flex items-center space-x-6">
        <motion.a
          href="#home"
          className="hover:text-blue-400 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Home
        </motion.a>
        <motion.a
          href="#top-headlines"
          className="hover:text-blue-400 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Top Headlines
        </motion.a>
        <motion.a
          href="#language"
          className="hover:text-blue-400 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Language
        </motion.a>
        <motion.a
          href="#country"
          className="hover:text-blue-400 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Country
        </motion.a>
        <motion.a
          href="#light-mode"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Light Mode
        </motion.a>
      </nav>
    </header>
  );
};

export default Header;
