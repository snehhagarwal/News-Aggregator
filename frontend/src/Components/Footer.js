import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };
  return (
<footer className="bg-black bg-opacity-90 backdrop-blur-lg text-white px-6 py-12 shadow-2xl shadow-slate-400">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
        <div className="space-y-6 md:space-y-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            About Global Pulse
          </h3>
          <p className="text-sm text-gray-400">
            Stay informed with the latest news from around the globe. Our
            platform delivers real-time updates tailored to your interests.
          </p>
        </div>
        <div className="space-y-6 md:space-y-4">
          <h3 className="text-2xl font-semibold text-gray-200">Quick Links</h3>
          <ul className="space-y-3">
            <motion.li
              className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Home
            </motion.li>
            <motion.li
              className="text-sm mb-3 text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Top Headlines
            </motion.li>
            <Link to={"/aboutus"}>
            <motion.li
              className="text-sm mb-3 text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              AboutUs
            </motion.li>
            </Link>
            <Link to={"/contactus"}>
            <motion.li
              className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              ContactUs  
            </motion.li>
            </Link>
          </ul>
        </div>
        <div className="space-y-6 md:space-y-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            Stay Connected
          </h3>
          <div className="flex space-x-6 justify-center">
            <motion.a
              href="#facebook"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Facebook fontSize="small" />
            </motion.a>
            <motion.a
              href="#twitter"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Twitter fontSize="small" />
            </motion.a>
            <motion.a
              href="#instagram"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Instagram fontSize="small" /> 
            </motion.a>
            <motion.a
              href="#linkedin"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <LinkedIn fontSize="small" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Global Pulse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
