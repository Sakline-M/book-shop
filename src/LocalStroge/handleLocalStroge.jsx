/* eslint-disable no-unused-vars */

import { json } from "react-router-dom";

export const handleLocalStorageLogin = (user) => {
  const eStore = localStorage.getItem("e-storage");
  if (!eStore) {
    const store = {
      cart: [],
      user: user,
    };
    const storeJson = JSON.stringify(store);
    localStorage.setItem("e-storage", storeJson);
  }

  localStorage.removeItem("e-storage");
  const store = {
    cart: [],
    user: user,
  };
  const storeJson = JSON.stringify(store);
  localStorage.setItem("e-storage", storeJson);
};
