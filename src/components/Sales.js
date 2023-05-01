import React from 'react'
import Title from './Title'
import Item from './Item'

const Sales = ({data, ifExists}) => {

    //console.log(data);
    const {title, items} = data;

  return (
    <div className='nike-container'>
        <Title title={title}/>
        <div className={`grid items-center lg:gap-7 gap-5 mt-7 ${ifExists ? 'xl:grid-cols-3 md:grid-cols-2  grid-cols-1' : 'xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'} mb-5`}>
            {items.map((item, i) => (
                <Item key={i} item={item} ifExists={ifExists}/>
            ))}
        </div>
    </div>
  )
}

export default Sales