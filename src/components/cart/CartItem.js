import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCartQty, increaseCartQty, removeItemFromCart } from "../../utils/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, text, img, price, color, shadow, cartQuantity } = item;

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeItemFromCart({ id, title, text, img, price, color, shadow, cartQuantity }));
  }

  const cartQunatityIncrease = () => {
    dispatch(increaseCartQty({ id, title, text, img, price, color, shadow, cartQuantity }));
  }

  const cartQunatityDecrease = () => {
    dispatch(decreaseCartQty({ id, title, text, img, price, color, shadow, cartQuantity }));
  }

  

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center sm:gap-16 gap-4 lg:gap-32 w-full">
        <div
          className={`relative bg-gradient-to-b ${color} ${shadow} rounded p-3 hover:scale-105 transition-all duration-300`}
        >
          <img src={img} alt={`img /${id}`} className="xl:w-36 xl:h-20 h-16 w-28" />
          <div className='absolute right-1 top-1 bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5">
          <div>
            <h1 className="font-medium lg:text-lg text-slate-900 text-sm">
              {title}
            </h1>
            <p className="text-xs text-slate-800 lg:text-sm">{text}</p>
          </div>
          <div className="flex items-center lg:gap-8 gap-5">
            <button
              type="button"
              className="bg-theme-cart rounded lg:w-6 lg:h-6 w-5 h-5 flex items-center justify-center active:scale-90"
              onClick={cartQunatityDecrease}
            >
              <MinusIcon className="lg:w-5 lg:h-5 w-4 h-4 text-white" />
            </button>
            <div className="lg:w-6 lg:h-6 w-5 h-5 bg-theme-cart rounded font-medium text-white flex items-center justify-center text-xs lg:text-base">
              {cartQuantity}
            </div>
            <button
              type="button"
              className="bg-theme-cart rounded lg:w-6 lg:h-6 w-5 h-5 flex items-center justify-center active:scale-90"
              onClick={cartQunatityIncrease}
            >
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

    <div className="flex flex-col items-center justify-between lg:h-[90px] h-[60px]">
        <div className="lg:text-lg text-sm text-slate-900 font-medium">${price * cartQuantity}</div>
        <div>
          <button type="button" className="bg-theme-cart rounded lg:w-6 lg:h-6 w-5 h-5 flex items-center justify-center active:scale-90 cursor-pointer" onClick={removeItem}>
            <TrashIcon className="lg:w-5 lg:h-5 w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
