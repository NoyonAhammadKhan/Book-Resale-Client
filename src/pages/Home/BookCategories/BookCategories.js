import React from 'react';
import BookCategoryCard from './BookCategoryCard';
import BookCat1 from '../../../assets/Book-Category/cat1.png'
import BookCat2 from '../../../assets/Book-Category/cat2.png'
import BookCat3 from '../../../assets/Book-Category/cat3.png'
import BookCat4 from '../../../assets/Book-Category/cat4.png'
import BookCat5 from '../../../assets/Book-Category/cat5.png'
import BookCat6 from '../../../assets/Book-Category/cat6.png'


const BookCategories = () => {
    return (
        <div>
            <div className='my-5'>
                <h1 className='font-bold text-4xl'>Book Categories</h1>
                <p className='font-md text-xl'> We are here to provide you the best book by category wise so that you can find book easily</p>
            </div>
            <div  className='grid grid-cols-3 mx-auto w-8/12 gap-y-5'>
                <BookCategoryCard title="Horror" img={BookCat1}></BookCategoryCard>
                <BookCategoryCard title="Science" img={BookCat2}></BookCategoryCard>
                <BookCategoryCard title="Thriller" img={BookCat6}></BookCategoryCard>
                <BookCategoryCard title="Biography" img={BookCat4}></BookCategoryCard>
                <BookCategoryCard title="Adventure" img={BookCat5}></BookCategoryCard>
                <BookCategoryCard title="Histry" img={BookCat3}></BookCategoryCard>

            </div>
        </div>
    );
};

export default BookCategories;