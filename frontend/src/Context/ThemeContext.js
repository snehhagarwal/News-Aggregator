import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  const toggleTheme = () => setDarkMode(prev => !prev);
  const updateSearchQuery = (query) => setSearchQuery(query);
  return (
    <AppContext.Provider value={{ darkMode, toggleTheme, searchQuery, updateSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
};
