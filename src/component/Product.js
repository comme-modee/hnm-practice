import React from 'react'

const Product = ({item}) => {
  return (
    <div className='product'>
        <div className='img'><img src={item.img} alt=''/></div>
        <div className='info'>
            <div className='title'>{item.title}</div>
            <div className='price'>₩{item.price}</div>
            <div className='new'>{item.new?'신제품':''}</div>
            <div className='choice'>{item.choice?'추천':''}</div>
        </div>
    </div>
  )
}

export default Product