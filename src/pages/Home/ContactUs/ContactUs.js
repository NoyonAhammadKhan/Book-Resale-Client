import React from 'react';
import ContactImg from '../../../assets/SectionImages/contact-img.png'
const ContactUs = () => {
    return (
        <div>
            <div className='grid grid-cols-2 w-9/12 mx-auto'>
                <div>
                    <form action="">
                    <div className="mb-6">
                    <h2 className='text-4xl text-left my-10 font-bold'>Contact Us</h2>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Name'/>
                    </div>
                    <div className="mb-6">
                   
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Email'/>
                    </div>
                    <div className="mb-6">
                  
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Contact Number'/>
                    </div>
                   
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." ></textarea>
                    <button className='bg-emerald-500 px-5 py-3 rounded-md text-white font-bold  w-full my-3'>Send Message</button>
                    </form>
                </div>
                <div className='my-5'>
                    <img src={ContactImg} className='w-5/6 ml-8' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;