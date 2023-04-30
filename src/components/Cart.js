import React, { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, totalCartAmount, totalCartQuantity } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((store) => store.cart.cartState);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartTotalQuantity = useSelector((store) => store.cart.cartTotalQuantity);
  const cartTotalAmount = useSelector((store) => store.cart.cartTotalAmount);

  console.log(cartTotalAmount);

  useEffect(() => {
    dispatch(totalCartAmount());
    dispatch(totalCartQuantity());
  },[cartItems, dispatch])

  const cartToggle = () => {
    dispatch(closeCart());
  };

  if (!cartState) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-white/50 backdrop-blur opacity-100 z-[200] w-full h-screen`}
    >
      <div className="absolute bg-white/50 backdrop-blur right-0 h-screen max-w-xl w-full">
        <CartCount cartToggle={cartToggle} cartTotalQuantity={cartTotalQuantity}/>
        {cartItems?.length === 0 ? (
          <CartEmpty cartToggle={cartToggle} />
        ) : (
          <div>
            <div className="h-[81vh] overflow-y-scroll scroll-smooth scroll-hidden flex flex-col gap-y-7 lg:gap-y-5 py-5 px-3 lg:px-2 lg:py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full h-auto px-5 py-3">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-white px-1 py-0.5">${cartTotalAmount}</h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-sm font-medium">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white w-full py-1">Check Out</button>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default Cart;
