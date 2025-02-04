import { createContext, useContext, useState } from "react";

const AdminContext = createContext(null);

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export const AdminContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  return (
    <AdminContext.Provider value={{ news, setNews }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
