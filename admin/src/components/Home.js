import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center  h-screen bg-gradient-to-b from-gray-800 to-gray-700">
      <motion.h1
        className="text-5xl font-bold text-white mt-40 mb-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to the Dashboard
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="w-[20rem] h-[12rem] bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Reporter Login
          </h3>
          <p className="text-white text-center px-4">
            Access the portal to submit and manage news articles.
          </p>
          <Link to="/ReporterLogin">
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Login
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="w-[20rem] h-[12rem] bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-red-400 mb-2">
            Administrator Login
          </h3>
          <p className="text-white text-center px-4">
            Manage users, reports, and system settings from here.
          </p>
          <Link to="/AdministratorLogin">
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Login
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
