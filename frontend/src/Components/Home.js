import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";
import { Announcement } from "@mui/icons-material";
import { useNewsContext } from "../context";

const Home = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { news } = useNewsContext();
  const newsData = news.approvedNews;

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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 pt-0 min-h-screen w-full bg-gradient-to-t from-gray-900 to-gray-700 ">
      {/* <div className="relative w-screen bg-gray-900 shadow-lg rounded-lg mb-6 p-4 pb-0 pl-0 pr-0 z-10"> */}
      <div className="relative w-screen bg-gray-900 shadow-lg rounded-lg mb-6 p-4 pb-0 pl-0 pr-0 z-10">

        <div className="flex items-center gap-3 text-white text-lg font-semibold z-10">
          <Announcement className="text-yellow-400 text-3xl animate-bounce" />
          <span>Breaking News</span>
        </div>
        <div className="overflow-hidden bg-gray-800 text-white mt-2 p-2 rounded-md">
          <div className="whitespace-nowrap animate-marquee text-lg">
            {currentItems.map((newsItem, index) => (
              <span key={index} className="mr-6">
                {newsItem.title} |
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-6 w-full flex justify-end pr-14 ">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered input-primary w-80 text-white placeholder-gray-400 bg-gray-800"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-14">
        {currentItems.length > 0 ? (
          currentItems.map((newsItem, index) => (
            <NewsCard key={index} {...newsItem} />
          ))
        ) : (
          <p className="text-white text-lg col-span-full text-center">
            No results found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && currentItems.length > 0 && (
        <div className="join flex justify-center items-center gap-2 mt-4">
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {[1, 2, "...", totalPages - 1, totalPages].map((page, index) => (
            <button
              key={index}
              className={`join-item btn ${currentPage === page ? "btn-primary" : ""}`}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
          <button
            className="join-item btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
