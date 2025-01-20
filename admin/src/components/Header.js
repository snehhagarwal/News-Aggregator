import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };
    const buttonVariants = {
        hover: { scale: 1.2 },
        tap: { scale: 0.95 },
    };
    return (
        <header
            className="flex items-center justify-between bg-slate-950 bg-opacity-90 backdrop-blur-lg text-white px-6 py-6 shadow-lg shadow-slate-600"
            // onClick={closeDropdown}
        >
            <Link to={"/"}>
                <motion.div
                    className="flex justify-center items-center gap-2 text-2xl font-bold cursor-pointer shadow-md shadow-slate-200 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Global Pulse
                </motion.div>
            </Link>
            <nav className="text-lg font-serif flex items-center space-x-6">
                {/* <motion.a
                    href="#home"
                    className="hover:text-blue-400 transition duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Home
                </motion.a> */}
                <motion.div
                    className="relative"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={(e) => e.stopPropagation()}
                >


                </motion.div>
                <motion.div
                    className="relative"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={(e) => e.stopPropagation()}
                >


                </motion.div>
                {/* <motion.button
                    onClick={toggleTheme}
                    className="text-white rounded-md transition duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {darkMode ? <Brightness7 fontSize="large" /> : <Brightness4 fontSize="large" />}

                </motion.button> */}
            </nav>
        </header>
    );
};

export default Header;
