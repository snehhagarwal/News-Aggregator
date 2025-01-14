import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";
import data from "./DummyData";

const Home = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const newsData = data.articles;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredData = newsData.filter((newsItem) =>
    newsItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen w-full bg-gradient-to-t from-gray-900 to-gray-700">
     <div className="mb-6 w-screen flex flex-col sm:flex-row sm:justify-center md:justify-end md:mr-[14%] gap-4">
  <input
    type="text"
    placeholder="Search news by title..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm shadow-slate-200 focus:outline-none focus:ring-2  focus:ring-white w-full sm:w-72"
  />
</div>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {currentItems.length > 0 ? (
          currentItems.map((newsItem, index) => (
            <NewsCard key={index} {...newsItem} />
          ))
        ) : (
          <p className="text-white text-lg">No results found.</p>
        )}
      </div>

      {totalPages > 1 && currentItems.length > 0 && (
        <div className="flex justify-center items-center gap-6 mb-4">
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none disabled:bg-gray-400 transition-all duration-300"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Previous
          </motion.button>
          <motion.span
            className="text-xl text-white font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {`Page ${currentPage} of ${totalPages}`}
          </motion.span>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none disabled:bg-gray-400 transition-all duration-300"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Home;
