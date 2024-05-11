/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const SingleSIze = ({ size, selectSize, setSelectSize }) => {
  return (
    <button
      className={`btn ${selectSize === size ? "btn-primary" : ""}`}
      onClick={() => {
        setSelectSize(size);
      }}
    >
      {size}
    </button>
  );
};

export default SingleSIze;
