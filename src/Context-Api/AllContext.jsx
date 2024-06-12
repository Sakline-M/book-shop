/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const AllContext = ({ children }) => {
  const [refresh, setRefresh] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("book-store-books"));
    if (!books) {
      setCart([]);
    } else {
      setCart(books);
    }
  }, [refresh]);

  const value = { refresh, setRefresh, cart };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default AllContext;
