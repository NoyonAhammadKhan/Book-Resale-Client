import { Carousel } from 'flowbite-react';
import React from 'react';
import HorrorImage from '../../../assets/banner-img/Horror.jpg'
import ThrillerImage from '../../../assets/banner-img/Thriller.webp'
import ScienceImage from '../../../assets/banner-img/Science.jpg';
import Img1 from '../../../assets/banner-img/img1.jpeg';
import Img2 from '../../../assets/banner-img/img2.webp';

const Slider = () => {
    return (
        <div className='mt-12 mb-12'>
            <div className="w-9/12 mx-auto h-64 sm:h-64 xl:h-80 2xl:h-96">
             <Carousel>
             <div className="grid grid-cols-2 h-full  bg-gray-400 dark:bg-gray-700 dark:text-white">
                <div className='align-middle my-36'>
                    <h1 className='align-middle text-6xl text-white'>Read Books For Increasing Knowledge And Imagination</h1>
                </div>
                <div>
                    <img className='h-4/6 w-full' src={Img1} alt="" />
                </div>
             </div>
                <div className="grid grid-cols-2 h-full  bg-gray-400 dark:bg-gray-700 dark:text-white">
                <div className='align-middle my-36'>
                    <h1 className='align-middle text-6xl text-white'>Knowledge Is Power</h1>
                </div>
                  <div>
                    <img className='w-full' src={Img2} alt="" />
                  </div>
                </div>
               
            </Carousel>
</div>
        </div>
    );
};

export default Slider;