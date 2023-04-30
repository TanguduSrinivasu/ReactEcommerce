import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { clearCartItems } from "../../utils/cartSlice";

const CartCount = ({cartToggle, cartTotalQuantity}) => {

  const dispatch = useDispatch();
  
  const cartClear = () => {
    dispatch(clearCartItems());
  } 

  return (
    <div className="flex items-center justify-between h-11 bg-white px-3">
      
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={cartToggle}>
          <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500"/>
        </div>
        <div>
          <h1 className="font-medium">
            Your Cart<span className="bg-slate-900 rounded ml-1 px-1 py-0.5 text-slate-100 font-normal text-xs">({cartTotalQuantity} Items)</span>
          </h1>
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
