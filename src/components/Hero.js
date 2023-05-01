import React from 'react'

const Hero = ({heroapi}) => {

    const {title, subtitle, img, btntext} = heroapi;

    //console.log(title)

  return (
    <>
    <div className='relative h-screen  flex bg-theme mt-3'>
        {/* <div className='absolute bg-theme h-screen w-auto top-0 left-0 right-0 z-10'></div> */}
        {/* background one with absolute */}
        <div className='flex flex-col items-center justify-center nike-container'>
            <div className='flex flex-col items-center justify-center my-3'>
                <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-slate-200'>{title}</h1>
                <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-slate-200'>{subtitle}</h1>
                <button type='button' className='px-7 py-1 active:scale-90 rounded-xl text-sm bg-slate-200 my-5 md:text-base'>{btntext}</button>
            </div>
            <div>
                <img src={img} alt='hero-img' className='w-auto h-[19vh] sm:h-[21vh] md:h-[35vh] lg:h-[45vh] mt-3  -rotate-[20deg] duration-700 hover:rotate-0 cursor-pointer'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero