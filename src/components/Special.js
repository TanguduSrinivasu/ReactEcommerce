import React from 'react'

export const Special = ({ifExists, data}) => {

    const  { title, heading, text, img, btn, url } = data;

  return (
    <div className={`flex ${ifExists && 'md:flex-row-reverse'} flex-col md:flex-row items-center justify-between md:justify-between nike-container`}>
        <div className='max-w-lg  w-full text-center'>
            <h1 className='md:text-4xl text-3xl font-bold text-blue-500'>{heading}</h1>
            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-slate-900'>{title}</h1>
            <p className='text-sm md:text-base my-4 text-slate-900'>{text}</p>
            <a href={url} target='_blank' rel='noreferrer'>
                <button type='button' className='button-theme bg-slate-900 text-slate-100 py-1.5 px-3'>{btn}</button>
            </a>
        </div>
        <div className='flex justify-center items-center max-w-xl w-full mt-3'>
            <img src={img} alt={title} className={`w-auto ${ifExists ? 'xl:h-60 lg:h-56 md:52 sm:h-44 xsm:36 rotate-6 hover:-rotate-12 duration-700' : 'xl:h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[3deg] hover:rotate-[15deg] duration-700 mb-10'}`}/>
        </div>
    </div>
  )
}
