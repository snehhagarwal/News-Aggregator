import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import countryData from "./Countries";

const Header = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowCountryDropdown((prev) => !prev);
  };

  const closeDropdown = () => setShowCountryDropdown(false);

  return (
    <header
      className="flex items-center justify-between bg-gray-800 dark:bg-gray-900 text-white px-6 py-8"
      onClick={closeDropdown}
    >
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
        <motion.div
          className="relative"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="hover:text-blue-400 transition duration-300"
            onClick={toggleDropdown}
          >
            Country
          </button>
          {showCountryDropdown && (
            <ul className="absolute top-full left-0 bg-gray-700 mt-2 w-48 rounded-lg shadow-lg z-50 overflow-y-auto max-h-48">
              {countryData.map((element, index) => (
                <li key={index} className="hover:bg-gray-600">
                  <Link
                    to={`/country/${element.isoAlpha2}`}
                    className="flex items-center gap-3 px-4 py-2"
                  >
                    <img
                      src={element.flagUrl}
                      alt={element.name}
                      className="w-6 h-4"
                    />
                    <span>{element.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
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
