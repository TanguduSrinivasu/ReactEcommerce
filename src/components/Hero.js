import React from 'react'

const Hero = ({heroapi}) => {

    const {title, subtitle, img, btntext} = heroapi;

    //console.log(title)

  return (
    <>
    <div className='relative h-auto w-auto flex'>
        <div className='absolute bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto top-0 left-0 right-0 z-10'></div>
        {/* background one with absolute */}
        <div className='z-20 flex flex-col items-center justify-center nike-container'>
            <div className='flex flex-col items-center justify-center mt-28 md:mt-24'>
                <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-slate-200'>{title}</h1>
                <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold text-slate-200'>{subtitle}</h1>
                <button type='button' className='px-7 py-1 active:scale-90 rounded-xl sm:text-sm bg-slate-200 my-5'>{btntext}</button>
            </div>
            <div>
                <img src={img} alt='hero-img' className='w-auto mt-3 h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] -rotate-[20deg] duration-700 hover:rotate-0 cursor-pointer object-fill'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero