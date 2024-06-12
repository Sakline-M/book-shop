/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
