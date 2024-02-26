import React, { useEffect, useState } from 'react'
import Product from '../component/Product'
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [query, setQuery] = useSearchParams();
    const [productList, setProductList] = useState([]);

    const getProduct = async () => {
        let searchQuery = query.get('q')||'';
        let url = `https://my-json-server.typicode.com/comme-modee/hnm-practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
    }

    useEffect(()=>{
        getProduct()
    },[query])
  return (
    <div className='product-container'>
        {productList.map((item) => <Link to={`product/${item.id}`}><Product item={item}/></Link>)}
    </div>
  )
}

export default ProductAll