import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import LoadingAnimation from "./Loader";
import { 
  Favorite, 
  FavoriteBorder, 
  Share, 
  ChatBubbleOutline,
  Close,
  ExpandMore,
  ExpandLess
} from "@mui/icons-material";
import { 
  IconButton, 
  TextField, 
  Button,
  Avatar,
  Modal,
  Box,
  Collapse
} from "@mui/material";
import { useAppContext } from "../Context/ThemeContext";
import { initSocket } from "./WebSocket/socket";

const NewsCard = ({ newsId, author, title, description, date, images }) => {
  const { darkMode } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showFullNews, setShowFullNews] = useState(false);
  const [commentsExpanded, setCommentsExpanded] = useState(false);
  const socket = initSocket();

  useEffect(() => {
    socket.on("likeUpdated", (data) => {
      if (data.newsId === newsId) setLiked(data.liked);
    });
    socket.on("commentAdded", (data) => {
      if (data.newsId === newsId) setComments((prev) => [...prev, data.comment]);
    });
    return () => {
      socket.off("likeUpdated");
      socket.off("commentAdded");
    };
  }, [socket, newsId]);

  const handleImageLoad = () => setLoading(false);
  const handleError = () => setLoading(true);
  
  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    socket.emit("newLike", { newsId, liked: !liked });
  };
  
  const handleCommentSubmit = (e) => {
    e.stopPropagation();
    if (newComment.trim()) {
      const comment = { 
        user: "Anonymous", 
        text: newComment,
        timestamp: new Date().toLocaleTimeString()
      };
      socket.emit("newComment", { newsId, comment });
      setNewComment("");
    }
  };

  const toggleComments = (e) => {
    e.stopPropagation();
    setCommentsExpanded(!commentsExpanded);
  };

  const handleCardClick = () => {
    setShowFullNews(true);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const shortDescription = description?.length > 120 ? 
    `${description.slice(0, 120)}...` : 
    description || "No description available.";
  const shortTitle = title?.length > 40 ? 
    `${title.slice(0, 40)}...` : 
    title || "Untitled";
  const urlToImage = images[0];

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '90vh',
    bgcolor: darkMode ? 'background.paper' : 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    overflowY: 'auto'
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="w-full flex justify-center"
      >
        <Tilt options={{ max: 8, scale: 1.01, speed: 400 }} className="tilt-card">
          <div 
            className={`relative flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} bg-opacity-80 backdrop-blur-md border ${darkMode ? "border-gray-700" : "border-gray-200"} rounded-2xl shadow-lg overflow-hidden w-72 h-[30rem] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer`}
            onClick={handleCardClick}
          >
            <div className="w-full h-48 bg-gray-300 relative">
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
            
            <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
              <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"} text-center mb-3`}>
                {shortTitle}
              </h3>
              
              <div className="flex-grow overflow-hidden">
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {shortDescription}
                </p>
              </div>
              
              <div className="text-xs mt-3">
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  <strong className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>Author:</strong> {author || "Unknown"}
                </p>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  <strong className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>Published:</strong> {new Date(date).toLocaleDateString() || "Unknown"}
                </p>
              </div>
              
              <div 
                className="flex justify-around mt-4 border-t pt-3"
                onClick={e => e.stopPropagation()}
              >
                <IconButton onClick={toggleLike}>
                  {liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: darkMode ? "white" : "black" }} />}
                </IconButton>
                <IconButton onClick={toggleComments}>
                  <ChatBubbleOutline sx={{ color: darkMode ? "white" : "black" }} />
                </IconButton>
                <IconButton>
                  <Share sx={{ color: darkMode ? "white" : "black" }} />
                </IconButton>
              </div>
              
              <Collapse in={commentsExpanded} timeout="auto" unmountOnExit>
                <div 
                  className="mt-3"
                  onClick={e => e.stopPropagation()}
                >
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    size="small" 
                    placeholder="Add a comment..." 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                  />
                  <Button 
                    fullWidth 
                    variant="contained" 
                    color="primary" 
                    className="mt-2" 
                    onClick={handleCommentSubmit}
                  >
                    Comment
                  </Button>
                  
                  <div className="mt-3 max-h-32 overflow-y-auto">
                    {comments.map((comment, index) => (
                      <div key={index} className="flex items-start gap-2 mb-2">
                        <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                          {comment.user.charAt(0)}
                        </Avatar>
                        <div>
                          <p className="text-xs font-medium">
                            {comment.user} <span className="text-xs text-gray-500">{comment.timestamp}</span>
                          </p>
                          <p className="text-sm">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </Tilt>
      </motion.div>

      {/* Full News Modal */}
      <Modal
        open={showFullNews}
        onClose={() => setShowFullNews(false)}
        aria-labelledby="full-news-modal"
        aria-describedby="full-news-description"
      >
        <Box sx={modalStyle} onClick={handleModalClick}>
          <div className={`relative ${darkMode ? "text-white" : "text-black"}`}>
            <IconButton
              aria-label="close"
              onClick={() => setShowFullNews(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: darkMode ? 'white' : 'black',
              }}
            >
              <Close />
            </IconButton>
            
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            
            <div className="w-full h-64 bg-gray-300 mb-4 rounded-lg overflow-hidden">
              <img 
                src={urlToImage} 
                alt="news" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex gap-4 mb-4 text-sm">
              <p><strong>Author:</strong> {author || "Unknown"}</p>
              <p><strong>Published:</strong> {new Date(date).toLocaleDateString() || "Unknown"}</p>
            </div>
            
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{description}</p>
            </div>
            
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold mb-3">Comments ({comments.length})</h3>
              <TextField 
                fullWidth 
                variant="outlined" 
                size="small" 
                placeholder="Add a comment..." 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
                className="mb-2"
              />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleCommentSubmit}
              >
                Post Comment
              </Button>
              
              <div className="mt-4 space-y-4 max-h-64 overflow-y-auto">
                {comments.map((comment, index) => (
                  <div key={index} className="flex gap-3">
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {comment.user.charAt(0)}
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{comment.user}</p>
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p>{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NewsCard;