import React from 'react'

const Footer = ({data}) => {

    const {titles, links} = data;
    //console.log(titles);

  return (
    <footer className='bg-theme py-7 mt-3'>
        <div className='nike-container text-slate-200'>
            <div className='grid justify-items-center w-full grid-cols-3 m-auto md:max-w-none gap-5 sm:gap-1'>
                {titles.map((val, i) => (
                    // console.log(val)'
                    <div key={i} className='flex justify-center w-28'>
                    <h1 className='text-lg lg:text-base md:text-sm font-semibold uppercase'>{val?.title}</h1>
                    </div>
                ))}

                {links.map((list, i) => (
                    // console.log(list)
                    <ul key={i} className='flex flex-col items-center gap-2'>
                        {list.map((list, j) => (
                            // console.log(list?.link)
                            <li key={j} className='text-sm sm:text-xs'>{list?.link}</li>
                        ))}
                    </ul>
                ))}
                
            </div>
        </div>
    </footer>
  )
}

export default Footer