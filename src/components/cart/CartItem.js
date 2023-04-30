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
      <div className="flex items-center gap-5">
        <div
          className={`relative bg-gradient-to-b ${color} ${shadow} rounded p-3 hover:scale-105 transition-all duration-300`}
        >
          <img src={img} alt={`img /${id}`} className="w-36 h-20 lg:h-16 lg:w-28" />
          <div className='absolute right-1 top-1 bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
              {title}
            </h1>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>
          <div className="flex items-center gap-8 lg:gap-5">
            <button
              type="button"
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              onClick={cartQunatityDecrease}
            >
              <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
            </button>
            <div className="w-6 h-6 lg:w-5 lg:h-5 lg:text-xs bg-theme-cart rounded font-medium text-white flex items-center justify-center">
              {cartQuantity}
            </div>
            <button
              type="button"
              className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              onClick={cartQunatityIncrease}
            >
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

    <div className="flex flex-col gap-5 lg:gap-3 items-center justify-between h-[90px] lg:h-[72px]">
        <div className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</div>
        <div>
          <button type="button" className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer" onClick={removeItem}>
            <TrashIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
