import React from 'react';
import Hero from './components/Hero';
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, topratesales  } from './data/data';
import Sales from './components/Sales';
import { Special } from './components/Special';
import Stories from './components/Stories';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './utils/store';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Provider store={store}>
    <Toaster position="top-center"reverseOrder={false} />
    <NavBar/>
    <Cart/>
   <main className='flex flex-col gap-[88px] sm:gap-16'>
    <Hero heroapi={heroapi}/>
    <Sales data={popularsales} ifExists/>
    <Special data={highlight} ifExists/>
    <Sales data={topratesales}/>
    <Special data={sneaker}/>
    <Stories story={story}/>
   </main>
   <Footer data={footerAPI}/>
   </Provider>
   </>
  );
}

export default App;
