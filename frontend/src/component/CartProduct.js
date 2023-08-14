import React from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlide";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-slate-200 p-2 flex gap-4 border border-slate-300">
      <div className=" p-3 bg-white rounded overflow-hidden">
        <img
          src={image}
          alt={"cartproductimage"}
          className=" h-28 w-40 object-cover "
        />
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <div className=" flex justify-between">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className=" cursor-pointer text-slate-700 hover:text-red-600"
            onClick={() => {
              dispatch(deleteCartItem(id));
            }}
          >
            <AiFillDelete />
          </div>
        </div>
        <p className=" text-slate-500  font-medium ">{category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500">₹</span>
          <span>{price}</span>
        </p>
        <div className=" flex justify-between ">
          <div className=" flex gap-3 items-center">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-slate-300  my-2 mt-2 rounded hover:bg-slate-400  p-1"
            >
              <BsPlus />
            </button>
            <p className=" font-semibold p-1">{qty}</p>
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-slate-300  my-2 mt-2 rounded hover:bg-slate-400 p-1"
            >
              <BiMinus />
            </button>
          </div>
          <div className=" flex items-center gap-2 font-bold">
            <p>Total :</p>
            <p>
              <span className="text-red-500">₹</span>
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
