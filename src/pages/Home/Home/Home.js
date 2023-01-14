import React from 'react';
import NotFOund404 from '../../NotFoundPages/NotFound404/NotFOund404';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import Slider from '../Slider/Slider';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-5xl">This is Home</h1> */}
            <TopSection></TopSection>
            <Slider></Slider>
            <ProductsCategories></ProductsCategories>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;