import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return (
        <div>
            
<div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='relative'>
    <Link className=''>
        <img className="rounded-t-lg w-full" src={props.img} alt="" />
        </Link>
    <button type="button" className= "block absolute -bottom-9 left-5 text-white bg-gradient-to-r from-black via-black to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold  text-lg  text-center mr-2 mb-2 rounded-full w-5/12  py-2.5 px-5 border-white border-4">19,January,2022</button>
    </div>
    
{/*    
    <button type="button" className= "block text-white bg-gradient-to-r from-black via-black to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full w-5/12 mt-[-1rem] -z-20">Blue</button> */}
    <div className="p-5 text-left">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-3">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-3">A book is a number of pieces of paper, usually with words printed on them, which are fastened together and fixed inside a cover of stronger paper or cardboard. Books contain information, stories, or poetry, for example.A book is a number of pieces of paper, usually with words printed on them, which are fastened together and fixed inside a cover of stronger paper or cardboard. Books contain information, stories, or poetry, for example.</p>
        <button className='bg-emerald-500 px-5 py-2 rounded-md text-white font-bold my-1'>Read More</button>
    </div>
</div>

        </div>
    );
};

export default BlogCard;