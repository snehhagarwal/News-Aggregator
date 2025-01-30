import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import vid from "../Assets/vid1.mp4";
import countryData from "./CountriesData";
import { useAppContext } from "../Context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme, searchQuery, updateSearchQuery } = useAppContext();
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showHeadlinesDropdown, setShowHeadlinesDropdown] = useState(false);
  const toggleDropdown = (type) => {
    if (type === "country") {
      setShowCountryDropdown(!showCountryDropdown);
      setShowHeadlinesDropdown(false);
    } else {
      setShowHeadlinesDropdown(!showHeadlinesDropdown);
      setShowCountryDropdown(false);
    }
  };
  
  const categories = [
    "business", "entertainment", "general", "health", "science", "sports", "technology", "politics"
  ];

  return (
    <header className={`flex items-center justify-between ${darkMode ? 'bg-gray-800 text-white' : 'bg-orange-100 text-black'} px-6 py-4 shadow-lg mt-10 mb-8 w-full rounded-full transition duration-300`}>
      <Link to="/">
        <motion.div className="flex items-center gap-2 text-2xl font-bold cursor-pointer p-2 rounded-lg hover:scale-105 transition duration-300">
          <video src={vid} autoPlay loop muted className="w-12 h-auto rounded-full border-2 border-blue-400" />
          <span className={`bg-gradient-to-r ${darkMode ? 'from-blue-500 to-cyan-400' : 'from-blue-400 to-cyan-200'} text-transparent bg-clip-text`}>Global Pulse</span>
        </motion.div>
      </Link>

      <div className="relative flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => updateSearchQuery(e.target.value)}
          className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-slate-300 text-black'} w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner`}
        />
      </div>

      <motion.a href="#home" className="hover:text-blue-400 transition duration-300">Home</motion.a>

      <div className="relative">
        <button className="hover:text-blue-400 transition duration-300 flex items-center gap-1" onClick={() => toggleDropdown("headlines")}>
          Top Headlines ▼
        </button>
        {showHeadlinesDropdown && (
          <ul className="absolute top-full left-0 bg-gray-800 text-white mt-2 w-48 rounded-lg shadow-lg z-50 overflow-y-auto max-h-48 border border-blue-400">
            {categories.map((category, index) => (
              <li key={index} className="hover:bg-gray-700">
                <Link to={`/Headlines/${category}`} className="block px-4 py-2 text-sm">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative">
        <button className="hover:text-blue-400 transition duration-300 flex items-center gap-1 " onClick={() => toggleDropdown("country")}>
          Country ▼
        </button>
        {showCountryDropdown && (
          <ul className="absolute top-full left-0 bg-gray-800 text-white mt-2 w-52 rounded-lg shadow-lg z-50 overflow-y-auto max-h-48 border border-blue-400">
            {countryData.map((element, index) => (
              <li key={index} className="hover:bg-gray-700">
                <Link to={`/countries/${element.isoAlpha2}`} className="flex items-center gap-3 px-4 py-2">
                  <img src={element.flagUrl} alt={element.name} className="w-6 h-4" />
                  <span>{element.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/UserLogin">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-[0.35rem] rounded-xl font-medium text-white shadow-lg backdrop-blur-md bg-gradient-to-r from-slate-800/50 to-slate-900/50 hover:from-slate-700/50 hover:to-slate-800/50 border border-white/20 focus:ring-4 focus:ring-slate-400 focus:outline-none active:scale-95"
        >
          Log In
        </motion.button>
      </Link>

      <label className="swap swap-rotate cursor-pointer">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <svg className="swap-on h-10 w-10 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
        </svg>
        <svg className="swap-off h-10 w-10 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
        </svg>
      </label>
    </header>
  );
};

export default Header;
