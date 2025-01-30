import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import LoadingAnimation from "./Loader";
import { Favorite, FavoriteBorder, Share, ChatBubbleOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const NewsCard = ({ author, title, description, date, images }) => {
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  const handleImageLoad = () => setLoading(false);
  const handleError = () => setLoading(true);
  const toggleLike = () => setLiked(!liked);

  const shortDescription =
    (description?.length > 120 ? description.slice(0, 120) + "..." : description) ||
    "No description available.";
  const shortTitle = (title?.length > 40 ? title.slice(0, 40) + "..." : title) || "Untitled";
  const urlToImage = images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center"
    >
      <Tilt options={{ max: 8, scale: 1.01, speed: 400 }} className="tilt-card">
        <div className="relative flex flex-col bg-opacity-80 bg-gray-900 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg shadow-gray-900 overflow-hidden w-80 h-[32rem] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="w-full h-52 bg-gray-800 relative">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingAnimation />
              </div>
            )}
            <img
              src={urlToImage}
              alt="news"
              className="w-full h-full object-cover rounded-t-2xl"
              onLoad={handleImageLoad}
              onError={handleError}
              style={{ display: loading ? "none" : "block" }}
            />
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col justify-between flex-grow">
            <h3 className="text-lg font-bold text-white text-center mb-3">{shortTitle}</h3>
            <p className="text-sm text-gray-400 text-center">{shortDescription}</p>

            <div className="text-xs text-gray-400 text-center mt-3">
              <p>
                <strong className="text-blue-400">Author:</strong> {author || "Unknown"}
              </p>
              <p>
                <strong className="text-blue-400">Published:</strong>{" "}
                {new Date(date).toLocaleDateString() || "Unknown"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around mt-4 border-t border-gray-700 pt-3">
              <IconButton onClick={toggleLike}>
                {liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: "white" }} />}
              </IconButton>
              <IconButton>
                <ChatBubbleOutline sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Share sx={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default NewsCard;
