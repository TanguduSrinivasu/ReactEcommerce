import React from 'react';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from 'react-redux';
import { addItemToCart, openCart } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';


const Item = ({item, ifExists}) => {

    const {id, title, text, rating, btn, img, price, color, shadow} = item;
    //console.log(ifExists);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartToggle = () => {
        dispatch(openCart());
    }

    const navigateToCart = () => {
        navigate('/cart')
    }

    const addToCart = () => {
        const item = {id, title, text, img, price, color, shadow };
        dispatch(addItemToCart(item));
    }

  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} flex  ${ifExists ? 'flex-row justify-between' : 'flex-col items-center justify-center'}  rounded-xl py-4 w-full hover:scale-105 px-5 gap-3`}>
        <div className={`flex flex-col ${ifExists ? 'items-start' : 'items-center'} justify-center`}>
            <h1 className='text-slate-200 xl:text-xl lg:text-lg text-base font-medium'>{title}</h1>
            <p className='text-slate-200 text-sm lg:text-base'>{text}</p>
            <div className='flex items-center justify-between w-28 my-2'>
                <div className='flex items-center bg-white/80 px-1 rounded text-sm font-medium'>${price}</div>
                <div className='flex items-center gap-1'>
                    <StarIcon className='icon-style lg:w-5 lg:h-5 md:w-4 h-4'/>
                    <h1 className='md:text-sm text-slate-100'>{rating}</h1>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button type='button' className='bg-white/90 button-theme p-0.5' onClick={addToCart}><ShoppingBagIcon className='icon-style text-slate-900'/></button>
                <button type='button' className='bg-white/90 button-theme px-2 py-1' onClick={() => { addToCart();  navigateToCart(); }}>{btn}</button>
            </div>
        </div>
        <div className={ifExists && 'absolute top-5 right-2'}>
            <img src={img} alt={`itemImg/${id}`} className={`cursor-pointer hover:-rotate-12 duration-700 ${ifExists ? 'h-auto xl:w-64 lg:w-56 w-48 -rotate-[35deg]' : 'lg:h-36 lg:w-64'}`}/>
        </div>
    </div>
  )
}

export default Item