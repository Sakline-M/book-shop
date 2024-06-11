import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import Carousel from "../Components/Carousel/Carousel";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products);
  return (
    <div className=" mb-[100px]">
      {/* <div className="text-center text-5xl font-bold">
        <h1>Welcome to E-shop</h1>
      </div>
      <div>
        <h1>Product length : {products.length}</h1>
      </div> */}
      <Carousel/>
      <div className="grid grid-cols-3 mx-5 mt-[70px]">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Home;
