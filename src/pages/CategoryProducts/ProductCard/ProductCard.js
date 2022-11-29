import { Button } from 'flowbite-react';
import React from 'react';

const ProductCard = ({book,setOpenModal,setBookingBook}) => {
    // console.log(book);
    const handleModal=()=>{
        setOpenModal(true);
    }
    
    const {productName,imgUrl,description,originalPrice,resalePrice,sellerEmail,sellerName,productCondition,category_name,productLocation,sellerVerification,status,usedYear,_id,postedTime}=book;
    
    return (
        <div>
            {/* a picture, name, location, resale price, original price, years of use, the time when it got
posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and
a **Book now** */}
           
<div className="mt-5 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg" src={imgUrl} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
        <div>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">SellerName: {sellerName}</h5>
        </div>
        <div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location:{productLocation}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Resale Price:${resalePrice}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Original Price:${originalPrice}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year of Used:{usedYear}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Posted Date:{postedTime}</p>
        </div>
        <Button  onClick={()=>{
            handleModal()
            setBookingBook(book)
            }}>
         
            Book Now
         
        </Button>

    </div>
</div>

        </div>
    );
};

export default ProductCard;