import React from 'react';
import TopImg from '../../../assets/SectionImages/top-section-img.png'
const TopSection = () => {
    return (
        <div className='grid grid-cols-2 w-9/12 mx-auto my-16 pt-10 pb-10'>
            <div className='text-left my-auto w-10/12'>
                <h3 className='text-xl text-green-500 font-bold my-3'>Bookish Hero Bookstore</h3>
                <h2 className='text-5xl font-bold my-3'>For Every Books <br /> You Need For Reading</h2>
                <p className='text-lg mb-3'>Here we have collection all the books which you need to enjoy.We Always apretiate to read books.It increase your imagination power.</p>
                <button className='bg-emerald-500 px-5 py-2 rounded-md text-white font-bold my-1'>Read More</button>
            </div>
            <div>
                <img src={TopImg} className='w-10/12' alt="" />
            </div>
        </div>
    );
};

export default TopSection;