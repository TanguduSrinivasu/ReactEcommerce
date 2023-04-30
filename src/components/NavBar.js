import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../utils/cartSlice';


const NavBar = () => {

    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const cartTotalQuantity = useSelector((store) => store.cart.cartTotalQuantity);

    const cartToggle = () => {
        dispatch(openCart());
    }

    const onNavScroll = () => {
        if(window.scrollY > 30)
        {
            setNavState(true);
        }
        else{
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, [navState])



  return (
    <header className={`fixed flex left-0 top-0 right-0 h-[9vh] z-[100] ${navState && 'bg-white/50 backdrop-blur'}`}>
        <nav className='flex items-center justify-between nike-container'>
            <div>
                <img src={logo} alt='nikeLogo' className={`w-16 h-auto ${navState && 'brightness-0'}`}></img>
            </div>
            <ul className='flex items-center justify-center gap-2'>
                <li>
                    <MagnifyingGlassIcon className={`icon-style ${navState && 'text-slate-900'}`}/>
                </li>
                <li>
                    <HeartIcon className={`icon-style ${navState && 'text-slate-900'}`} />
                </li>
                <li className='flex'>
                    <button type='button' className='relative active:scale-110 transition-all duration-300' onClick={cartToggle}>
                        <ShoppingBagIcon className={`icon-style ${navState && 'text-slate-900'}`}/>
                        <div className={`absolute top-3 right-[-5px] w-4 h-4 text-[0.65rem] font-medium rounded-full text-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100' : 'bg-slate-100 text-slate-900 '}`}>{cartTotalQuantity}</div>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar