/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

const AllContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    const store = localStorage.getItem("e-storage");

    if (store) {
      const user = JSON.parse(store.user);
      setUser(user);
    }
  }, [refresh]);

  const value = {user : "context"}
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};

export default AllContext;
