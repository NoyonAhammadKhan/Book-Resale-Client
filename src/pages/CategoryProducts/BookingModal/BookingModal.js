import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({openModal,setOpenModal,handleModal,bookingBook}) => {
    const handleCloseModal=()=>{
        setOpenModal(false)
    }
    const {user}=useContext(AuthContext)
    // const {productName}=bookingBook;
    const {productName,imgUrl,description,originalPrice,resalePrice,sellerEmail,sellerName,productCondition,category_name,productLocation,sellerVerification,status,usedYear,_id,postedTime}=bookingBook;
    
    console.log(bookingBook);
    const handleSubmit=(event)=>{
      event.preventDefault();
     const form =event.target;
     const meetingLocation=form.meetingLocation.value;
     const contact = form.contact.value;
     const userEmail=user?.email;
     const bookingDetails={
      productName,
      imgUrl,
      description,
      originalPrice,
      resalePrice,
      sellerEmail,
      productCondition,
      category_name,
      productLocation,sellerVerification,status,usedYear,
      productId:_id,
      userEmail,
      postedTime,meetingLocation,contact
     }

     fetch('https://usedbook-noyonahammadkhan.vercel.app/booking',{
      method:'POST',
      
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(bookingDetails)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if(data.acknowledged){
       
        toast.success('Product added successfully')
        form.reset()
      }  
     
    })
    // console.log(contact,meetingLocation);
   
    }
    return (
        <React.Fragment>
        <Button onClick={handleModal}>
          Toggle modal
        </Button>
        <Modal
          show={openModal}
          size="md"
          popup={true}
          onClose={handleCloseModal}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h1 className='text-2xl'>{productName}</h1>
              <form onSubmit={handleSubmit}>
              <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Book Name:</label>
                <input type="text" placeholder='' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' defaultValue={productName}/>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">User Name</label>
                <input type="text" placeholder='' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' defaultValue={user?.displayName} readOnly/>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">User Email</label>
                <input type="text" placeholder='' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' defaultValue={user?.email} readOnly/>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Resale Price</label>
                <input type="text" placeholder='' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' defaultValue={resalePrice} readOnly/>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Phone Number</label>
                <input type="text" placeholder='' name='contact' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' required/>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Meeting Location</label>
                <input type="text" placeholder='' name='meetingLocation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' required/>
               
                <input type="submit"   className='bg-blue-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5' />
                
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
};

export default BookingModal;