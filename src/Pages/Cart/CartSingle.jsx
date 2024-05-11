/* eslint-disable react/prop-types */

const CartSingle = ({item}) => {
    const {product_name, photo_link, price} = item
    return (
        <div className="grid grid-cols-3 gap-5 border-2 my-5 mx-5">
            <img className="w-[100px] h-[100px]" src={photo_link} alt="" />
            <h1 className="text-2xl">{product_name}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default CartSingle;