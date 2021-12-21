import React, { useState, useContext, Children } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, steIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, steIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    steIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    steIsSidebarOpen(false);
  };

  const openSubmenu = (text, cordinates) => {
    
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(cordinates);
    steIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    steIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
