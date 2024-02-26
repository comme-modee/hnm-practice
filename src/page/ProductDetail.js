import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/comme-modee/hnm-practice/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data)
    }
    useEffect(()=>{
        getProductDetail();
    },[])
  return (
    <div className='product-detail-container'>
        <div><img src={product?.img} alt=''/></div>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.size.map((size) => <span>{size}</span>)}</div>
        <button>Order</button>
    </div>
  )
}

export default ProductDetail