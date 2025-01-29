import React, { useState } from "react";
import { motion } from "framer-motion";
import vid from "../Assets/vid1.mp4";
import { Link } from "react-router-dom";
import countryData from "./CountriesData";
import { Brightness4, Brightness7 } from "@mui/icons-material";
const Header = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showHeadlinesDropdown, setShowHeadlinesDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); 
  };
  const buttonVariants = {
    hover: { scale: 1.2},
    tap: { scale: 0.95 },
  };
  const toggleCountryDropdown = (e) => {
    e.stopPropagation();
    setShowCountryDropdown((prev) => !prev);
    setShowHeadlinesDropdown(false);
  };
  const toggleHeadlinesDropdown = (e) => {
    e.stopPropagation();
    setShowHeadlinesDropdown((prev) => !prev);
    setShowCountryDropdown(false);
  };
  const closeDropdown = () => {
    setShowCountryDropdown(false);
    setShowHeadlinesDropdown(false);
  };
  let categories = [
    "business",
    "entertainment",
    "general",
    "health", 
    "science",
    "sports",
    "technology",
    "politics",
  ];
  return (
<header
  className="flex items-center justify-between bg-black bg-opacity-90 backdrop-blur-lg text-white px-6 py-6 shadow-lg shadow-slate-400"
  onClick={closeDropdown}
>
  <Link to={"/"}>
      <motion.div
        className="flex justify-center items-center gap-2 text-2xl font-bold cursor-pointer shadow-md shadow-slate-200 p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <video src={vid} autoPlay loop muted className="w-16 h-auto rounded-full border-2 border-blue-200"></video>
        Global Pulse
      </motion.div>
      </Link>
      <nav className="text-lg font-serif flex items-center space-x-6">
        <motion.a
          href="#home"
          className="hover:text-blue-400 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Home
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
            onClick={toggleHeadlinesDropdown}
          >
            Top Headlines
          </button>
          {showHeadlinesDropdown && (
            <ul className="absolute top-full left-0 bg-gray-700 mt-2 w-48 rounded-lg shadow-lg z-100 overflow-y-auto max-h-48">
              {categories.map((category, index) => (
                <li key={index} className="hover:bg-gray-600">
                  <Link
                    to={`/Headlines/${category}`}
                    className="block px-4 py-2"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
        <motion.div
          className="relative"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="hover:text-blue-400 transition duration-300"
            onClick={toggleCountryDropdown}
          >
            Country
          </button>
          {showCountryDropdown && (
            <ul className="absolute top-full left-0 bg-gray-700 mt-2 w-48 rounded-lg shadow-lg z-50 overflow-y-auto max-h-48">
              {countryData.map((element, index) => (
                <li key={index} className="hover:bg-gray-600">
                  <Link
                    to={`/countries/${element.isoAlpha2}`}
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
        <Link to="/UserLogin">
        <motion.button
        
        className="relative"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap">
          LogIn
        </motion.button>
        </Link>
        <motion.button
      onClick={toggleTheme}
      className="text-white rounded-md transition duration-300 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
{darkMode ? <Brightness7 fontSize="large" /> : <Brightness4 fontSize="large" />}

    </motion.button>
      </nav>
    </header>
  );
};

export default Header;
