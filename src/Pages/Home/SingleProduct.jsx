/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import handleAddToLocalStorage from "../../LocalStroge/handleLocalStroge";
import { BookContext } from "../../Context-Api/AllContext";
import toast from "react-hot-toast";

const SingleProduct = ({ product }) => {
  const { product_name, photo_link, description, id, price } = product;
  const { refresh, setRefresh, cart } = useContext(BookContext);

  const handleAddToLocalStorage = () => {
    let books = JSON.parse(localStorage.getItem("book-store-books"));
    if (!books) {
      const newBooks = JSON.stringify([product]);
      localStorage.setItem("book-store-books", newBooks);
      setRefresh(refresh + 1);
      toast.success("successfully add to cart");
    } else {
      // Check if the product is already in the cart
      const productExists = books.some((book) => book.id === id);

      if (productExists) {
        return toast.error("This product is already in the cart");
      } else {
        // Add the product to the cart
        const newBooks = JSON.stringify([...books, product]);
        localStorage.setItem("book-store-books", newBooks);
        setRefresh(refresh + 1);
        toast.success("successfully add to cart");
      }
    }
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

        <div className="card-actions w-full">
          <button
            onClick={handleAddToLocalStorage}
            className="btn btn-primary w-full"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
