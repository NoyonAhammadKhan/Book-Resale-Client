import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductsCategory from './ProductsCategory';

const ProductsCategories = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='grid grid-cols-3 w-9/12 mx-auto'>
            {/* {categories.length} */}
            {categories.map(category=> <ProductsCategory key={category._id} category={category}></ProductsCategory>)     
            }
        </div>
    );
};

export default ProductsCategories;