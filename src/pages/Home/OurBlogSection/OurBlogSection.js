import React from 'react';
import BlogCard from './BlogCard';
import BlogImg1 from '../../../assets/BlogImage/b1.jpg';
import BlogImg2 from '../../../assets/BlogImage/b2.jpg';

const OurBlogSection = () => {
    return (
        <div className='bg-gray-100 h-[95vh]'>
            <h1 className='text-3xl font-bold text-center mt-10 pt-10 pb-10'>From Our Blog</h1>
            <div className='grid grid-cols-2 w-8/12 mx-auto'>
               <BlogCard title="Habit of reading book develop personality" img={BlogImg1}></BlogCard>
               <BlogCard title="Increasing imagination by reading books" img={BlogImg2}></BlogCard>
            </div>
        </div>
    );
};

export default OurBlogSection;