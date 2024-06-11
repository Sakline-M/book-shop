/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useState } from "react";
// import SingleSIze from "./SingleSIze";

const SingleProduct = ({ product }) => {
  // const [selectSize, setSelectSize] = useState("");
  const { product_name, photo_link, description, id, price, available_sizes } =
    product;
  const handleAddToCart = () => {
    const store = JSON.parse(localStorage.getItem("e-storage"));
    if (!store) {
      return window.alert("please login first");
    }
    store.cart = [...store.cart, product];
    const newStore = JSON.stringify(store);
    localStorage.removeItem("e-storage");
    localStorage.setItem("e-storage", newStore);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <img className="w-[500px] h-[350px]" src={photo_link} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>{description}</p>
        <p>Price : {price}</p>

        {/* <div className="grid grid-cols-5">
          {available_sizes.map((size, i) => (
            <SingleSIze
              key={id}
              size={size}
              selectSize={selectSize}
              setSelectSize={setSelectSize}
            ></SingleSIze>
          ))}
        </div> */}

        <div className="card-actions w-full">
          <button onClick={handleAddToCart} className="btn btn-primary w-full">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
