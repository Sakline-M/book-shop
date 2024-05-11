/* eslint-disable no-unused-vars */

import CartSingle from "./CartSingle";

const Cart = () => {
  const store = JSON.parse(localStorage.getItem("e-storage"));
  const cartItems = store.cart;

  const TotalPriceCount = (cartItems) => {
    let price = 0;
    cartItems.forEach((items) => {
      const productPrice = items.price;
      price = productPrice + price;
    });

    return price;
  };

  const totalPrice = TotalPriceCount(cartItems);
  console.log(totalPrice);
  return (
    <div className="min-h-screen">
      <h1>Cart length : {cartItems.length}</h1>
      <h1>Total price : {totalPrice}</h1>
      {cartItems.map((item, index) => (
        <CartSingle key={index} item={item}></CartSingle>
      ))}
      <div className="flex justify-center items-center">
        <button className="btn btn-primary w-[500px]">Buy now</button>
      </div>
    </div>
  );
};

export default Cart;
