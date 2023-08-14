import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };
  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };
  return (
    <div>
      <div className=" w-full max-w-xl  m-auto md:flex bg-white mt-2">
        <div className=" max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            alt={" productDisplayimage"}
            className=" hover:scale-105 transition-all h-full"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-500  font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className=" font-bold text-4xl">
            <span className="text-red-500">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className=" flex gap-3">
            <button
              onClick={handleBuy}
              className="bg-yellow-500  my-2 mt-2 rounded hover:bg-yellow-600 min-w-[100px] p-2"
            >
              Buy
            </button>
            <button
              className="bg-yellow-500  my-2 mt-2 rounded hover:bg-yellow-600 min-w-[100px] mr-2 p-2"
              onClick={handleAddCartProduct}
            >
              Add Cart
            </button>
          </div>
          <div className="">
            <p className=" text-slate-600 font-medium">Description :</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"} />
    </div>
  );
};
export default Menu;
