import React from 'react'

const Title = ({title}) => {
  return (
    <div>
        <h1 className='xl:text-5xl lg:text-4xl text-3xl font-bold text-slate-900'>{title}</h1>
    </div>
  )
}

export default Title