import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import LoadingAnimation from "./Loader";
import { IconButton } from "@mui/material";
import { FavoriteBorder, ChatBubbleOutline, Share } from "@mui/icons-material";
const NewsCard = ({ title, urlToImage, description, source, author, publishedAt }) => {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  const handleError=()=>{
    setLoading(true);
  };
  const shortDescription = (description?.length > 100 ? description.slice(0, 100) + "..." : description) || "No description available.";
  const shortTitle = (title?.length > 30 ? title.slice(0, 30) + "..." : title) || "Untitled";
  return (
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{ cursor: "pointer" }}
>
  <Tilt options={{ max: 10, scale: 1.05, speed: 300 }} className="tilt-card z-10">
    <div className="flex justify-center items-center bg-black rounded-lg p-5 bg-opacity-20 shadow-md shadow-slate-200 w-80 h-[30rem] mx-auto mb-10 transition-all duration-300 ease-in-out transform hover:scale-104 hover:shadow-2xl hover:border-2 hover:border-blue-900 relative">
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-lg font-semibold text-center text-white mb-8">
          {shortTitle}
        </h3>
        {loading && <LoadingAnimation />}
        <img
          src={urlToImage}
          alt={""}
          className="w-full h-36 object-cover rounded-lg mb-4"
          onLoad={handleImageLoad}
          onError={handleError}
          style={{ display: loading ? "none" : "block" }}
        />
        <p className="text-sm text-gray-300 mb-3 text-center">{shortDescription}</p>
        <div className="text-xs text-gray-400 text-center">
          <p><strong className="text-blue-400">Source:</strong> {source?.name || source || "Unknown source"}</p>
          <p><strong className="text-blue-400">Author:</strong> {author || "Unknown author"}</p>
          <p><strong className="text-blue-400">Published At:</strong> {new Date(publishedAt).toLocaleDateString() || "Unknown date"}</p>
        </div>
        <div className="flex justify-around mt-4 w-full">
          <IconButton>
            <FavoriteBorder sx={{ color: "white" }}/> 
            </IconButton>
            <IconButton >
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
