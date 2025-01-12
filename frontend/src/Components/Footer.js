import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white px-6 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
        {/* About Section */}
        <div className="space-y-6 md:space-y-4">
          <h3 className="text-2xl font-semibold text-gray-200">
            About Global Pulse
          </h3>
          <p className="text-sm text-gray-400">
            Stay informed with the latest news from around the globe. Our
            platform delivers real-time updates tailored to your interests.
          </p>
        </div>

        {/* Quick Links Section */}
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
              className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Top Headlines
            </motion.li>
            <motion.li
              className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Technology
            </motion.li>
            <motion.li
              className="text-sm text-gray-300 hover:text-blue-400 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Entertainment
            </motion.li>
          </ul>
        </div>

        {/* Stay Connected Section */}
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
              <Facebook fontSize="small" /> {/* Facebook Icon */}
            </motion.a>
            <motion.a
              href="#twitter"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Twitter fontSize="small" /> {/* Twitter Icon */}
            </motion.a>
            <motion.a
              href="#instagram"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Instagram fontSize="small" /> {/* Instagram Icon */}
            </motion.a>
            <motion.a
              href="#linkedin"
              className="text-gray-300 hover:text-blue-400 text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <LinkedIn fontSize="small" /> {/* LinkedIn Icon */}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Global Pulse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
