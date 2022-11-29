import React from 'react';
import NotFOund404 from '../../NotFoundPages/NotFound404/NotFOund404';
import About from '../About/About';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-5xl">This is Home</h1> */}
            <Slider></Slider>
            <ProductsCategories></ProductsCategories>
            <About></About>
        </div>
    );
};

export default Home;