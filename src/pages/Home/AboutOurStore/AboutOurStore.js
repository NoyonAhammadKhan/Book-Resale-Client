import React from 'react';
import AboutStoreImg from '../../../assets/SectionImages/about-img.png'
const AboutOurStore = () => {
    return (
        <div className='bg-gray-100 h-[50vh] my-10'>
            <div className='flex w-8/12 mx-auto items-center p-5'>
                <div className='basis-1/2'>
                    <img src={AboutStoreImg} className='w-full p-5' alt="" />
                </div>
                <div className='basis-1/2 text-left'>
                    <h1 className='font-bold text-3xl'>About Our Bookstore</h1>
                    <p className='text-md my-3'>Our Book store is a very dedicated to give you provide the greates book you needs.You can sell your old book here and then you also can buy used book from here.Selling good books is our primary priority.Book store is a very dedicated to give you provide the greates book you needs.You can sell your old book here and then you also can buy used book from here.Selling good books is our primary priority</p>
                    <button className='bg-emerald-500 px-5 py-2 rounded-md text-white font-bold my-1'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutOurStore;