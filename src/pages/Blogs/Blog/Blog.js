import React from 'react';

const Blog = ({blog}) => {
    const {question,answer}=blog;
    return (
        <div className='mx-auto'>
            
            <div className="block w-3/4 mx-auto mt-5 mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{question}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{answer}</p>
            </div>

        </div>
    );
};

export default Blog;