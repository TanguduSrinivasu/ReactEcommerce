import React from 'react';

import {footerAPI, heroapi, highlight, popularsales, sneaker, story, topratesales  } from '../data/data'
import Hero from './Hero';
import Sales from './Sales';
import { Special } from './Special';
import Stories from './Stories';
import Footer from './Footer';
import NavBar from './NavBar';


const Main = () => {
  return (
    <main className='flex flex-col lg:gap-[88px] gap-16'>
    <NavBar/>
    <Hero heroapi={heroapi}/>
    <Sales data={popularsales} ifExists/>
    <Special data={highlight} ifExists/>
    <Sales data={topratesales}/>
    <Special data={sneaker}/>
    <Stories story={story}/>
    <Footer data={footerAPI}/>
   </main>
  )
}

export default Main