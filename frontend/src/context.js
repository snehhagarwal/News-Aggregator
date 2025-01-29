import { createContext, useContext, useState } from "react";

// Create the News Context
const NewsContext = createContext(null);

// Custom hook to access the context
export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};

// Provider component that wraps your app and provides state
export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(null); // Changed SetNews to setNews for consistency

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
