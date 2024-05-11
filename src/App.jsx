/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
};

export default App;
