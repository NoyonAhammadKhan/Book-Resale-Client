import React from 'react';

const BookCategoryCard = (props) => {
    return (
        <div className='w-[18vw] flex flex-col items-center'>
            <div className='h-32 w-32 rounded-full bg-gray-100 relative'>
                <img src={props.img} className='w-4/6 h-/6 bottom-3 left-5 absolute p-3' alt="" />
            </div>
            <div className=''>
                <h1 className='text-xl font-bold'>{props.title}</h1>
                <p className='my-3'>We provide the best quality used {props.title} books. Our team always check the book quality before sending us. You can easily trust us to get your preferable book.</p>
                <button className='bg-emerald-500 px-5 py-2 rounded-md text-white font-bold my-1'>Go to store</button>
            </div>
        </div>
    );
};

export default BookCategoryCard;