import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

// const axios = require('axios');
import * as axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../ProductCard/ProductCard';
import BookingModal from '../BookingModal/BookingModal';

const CategoryProducts = () => {
  const category = useLoaderData();
  const {_id,category_name}=category;
  const [openModal,setOpenModal]=useState(false);
  const [bookingBook,setBookingBook]=useState(null);
  const handleModal=()=>{
      setOpenModal(true);
  }
  const handleCloseModal=()=>{
      setOpenModal(false)
  }

  const { data: categoryProducts = [], refetch, isLoading } = useQuery({
    queryKey: ['books/', category_name],
    queryFn: async () => {
        const res = await fetch(`https://usedbook-noyonahammadkhan.vercel.app/books?category=${category_name}`);
        const data = await res.json();
        return data
    }
})
// console.log(categoryProducts)
console.log('booking book',bookingBook)
 
    return (
        <div>
            <h1 className='text-5xl text-blue-700 mb-5'>{category_name} Books</h1>
            <div className='grid grid-cols-3'>
                {
                    categoryProducts.map(book=><ProductCard setOpenModal={setOpenModal} openModal={openModal} handleModal={handleModal} setBookingBook={setBookingBook}  book={book} key={book._id}></ProductCard>)
                }
            </div>
          {
            bookingBook &&   <BookingModal bookingBook={bookingBook} setOpenModal={setOpenModal} openModal={openModal} handleCloseModal={handleCloseModal} handleModal={handleModal}></BookingModal>
          }
        </div>
    );
};

export default CategoryProducts;