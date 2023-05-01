import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { clearCartItems } from "../../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const CartCount = ({cartTotalQuantity}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cartClear = () => {
    dispatch(clearCartItems());
  } 

  const navigateToMain = () => {
      navigate('/')
  }

  return (
    <div className="flex items-center justify-between h-11 bg-white px-3 max-w-3xl mx-auto">
      
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={navigateToMain}>
          <ChevronDoubleLeftIcon className="w-5 h-5 lg:w-10 lg:h-10 text-slate-900 hover:text-orange-500"/>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-medium lg:text-xl">
            Your Cart
          </h1>
          <h1 className="bg-slate-900 rounded ml-1 px-1 py-0.5 text-slate-100 font-normal text-xs lg:text-sm">({cartTotalQuantity} Items)</h1>
        </div>
      </div>

      <div>
        <button className="bg-slate-900 rounded text-slate-100 p-0.5 active:scale-90">
          <XMarkIcon className="w-5 h-5" onClick={cartClear}/>
        </button>
      </div>

    </div>
  );
};

export default CartCount;
