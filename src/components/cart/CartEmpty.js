import React from "react";
import emptybag from "../../assets/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const CartEmpty = ({cartToggle}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-7">
      <img src={emptybag} alt="emptyBag" className="w-40 lg:w-36 md:w-32 sm:w-28 h-auto hover:scale-110 transition-all duration-300"/>

      <button type="button" className="flex items-center justify-center button-theme px-5 py-2 bg-gradient-to-b from-amber-500 to-orange-500 shadow-md shadow-orange-500 text-sm gap-3 font-semibold" onClick={cartToggle}>
        <ArrowLeftIcon className="w-5 h-5"/>
        <span>Back To Nike Store</span>
      </button>
    </div>
  );
};

export default CartEmpty;
