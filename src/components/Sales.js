import React from 'react'
import Title from './Title'
import Item from './Item'

const Sales = ({data, ifExists}) => {

    //console.log(data);
    const {title, items} = data;

  return (
    <div className='nike-container'>
        <Title title={title}/>
        <div className={`grid items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'} mb-5`}>
            {items.map((item, i) => (
                <Item key={i} item={item} ifExists={ifExists}/>
            ))}
        </div>
    </div>
  )
}

export default Sales