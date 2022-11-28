import React from 'react';
import { useLoaderData } from 'react-router-dom';

// const axios = require('axios');
import * as axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const CategoryProducts = () => {
  const category = useLoaderData();
  const {_id,category_name}=category;

  const { data: categoryProducts = [], refetch, isLoading } = useQuery({
    queryKey: ['books/', category_name],
    queryFn: async () => {
        const res = await fetch(`https://usedbook-noyonahammadkhan.vercel.app/books?category=${category_name}`);
        const data = await res.json();
        return data
    }
})

 
    return (
        <div>
            <h1>Category Products:{categoryProducts.length}</h1>
        </div>
    );
};

export default CategoryProducts;