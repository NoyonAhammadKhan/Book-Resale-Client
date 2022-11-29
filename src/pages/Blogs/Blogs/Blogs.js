import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BookingModal from '../../CategoryProducts/BookingModal/BookingModal';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        axios.get('https://usedbook-noyonahammadkhan.vercel.app/blogs')
        .then(res=>{
            setBlogs(res.data);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <div>
                <BookingModal></BookingModal>
            </div>
            <h1 className='text-6xl'>This is blog page</h1>
            <div className='mx-auto'>
            {
            blogs.map(blog=><Blog blog={blog} key={blog._id}></Blog>)
             }
            </div>
         
        </div>
    );
};

export default Blogs;