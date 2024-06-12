/* eslint-disable no-unused-vars */

import { useContext } from "react";
import CartSingle from "./CartSingle";
import { BookContext } from "../../Context-Api/AllContext";

const Cart = () => {
  const { cart } = useContext(BookContext);

  const cartCount = (cart) => {
    let price = 0;
    cart.forEach((book) => {
      price = price + book.price;
    });
    return price;
  };

  const totalPrice = cartCount(cart);
  return (
    <div className="min-h-screen">
      {cart.map((item, index) => (
        <CartSingle key={index} item={item}></CartSingle>
      ))}
      <div className="flex justify-center items-center">
        <button className="btn btn-primary w-[500px]">Buy now</button>
      </div>
    </div>
  );
};

export default Cart;
