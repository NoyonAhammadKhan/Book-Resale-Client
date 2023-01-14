import React from 'react';
import NotFOund404 from '../../NotFoundPages/NotFound404/NotFOund404';
import About from '../About/About';
import AboutOurStore from '../AboutOurStore/AboutOurStore';
import BookCategories from '../BookCategories/BookCategories';
import ContactUs from '../ContactUs/ContactUs';
import OurBlogSection from '../OurBlogSection/OurBlogSection';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import Slider from '../Slider/Slider';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-5xl">This is Home</h1> */}
            <TopSection></TopSection>
            {/* <Slider></Slider> */}
            <AboutOurStore></AboutOurStore>
            <BookCategories></BookCategories>
            {/* <ProductsCategories></ProductsCategories> */}

            <OurBlogSection></OurBlogSection>
            <About></About>
           
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;