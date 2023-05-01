import React from 'react';
// import Hero from './components/Hero';
// import { footerAPI, heroapi, highlight, popularsales, sneaker, story, topratesales  } from './data/data';
// import Sales from './components/Sales';
// import { Special } from './components/Special';
// import Stories from './components/Stories';
// import Footer from './components/Footer';
// import NavBar from './components/NavBar';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './utils/store';
import { Toaster } from 'react-hot-toast';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Provider store={store}>
    <Toaster position="top-center"reverseOrder={false} />
   
    {/* <Cart/>
    <Main/> */}
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
   </Provider>
   </>
  );
}

export default App;
