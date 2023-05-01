import React, { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
// import { closeCart} from "../utils/cartSlice";
import { totalCartAmount, totalCartQuantity } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  // const cartState = useSelector((store) => store.cart.cartState);
  const cartItems = useSelector((store) => store.cart.cartItems);
  const cartTotalQuantity = useSelector((store) => store.cart.cartTotalQuantity);
  const cartTotalAmount = useSelector((store) => store.cart.cartTotalAmount);

  console.log(cartTotalAmount);

  useEffect(() => {
    dispatch(totalCartAmount());
    dispatch(totalCartQuantity());
  },[cartItems, dispatch])

  // const cartToggle = () => {
  //   dispatch(closeCart());
  // };

  

  return (
      <div className="h-full w-full mx-auto">
        <CartCount cartTotalQuantity={cartTotalQuantity}/>
        {cartItems?.length === 0 ? (
          <CartEmpty />
        ) : (
          <div>
            <div className="flex flex-col xl:gap-y-7 gap-y-5 py-5 px-3 lg:px-2 lg:py-3 h-screen w-full max-w-3xl overflow-y-scroll scroll-hidden mx-auto">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="bg-white flex flex-col gap-2 px-5 py-5 max-w-3xl w-full mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-white px-1 py-0.5">${cartTotalAmount}</h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white w-full py-1 max-w-md lg:w-32">Check Out</button>
              </div>
            </div>
          </div>

        )}
      </div>
  );
};

export default Cart;
