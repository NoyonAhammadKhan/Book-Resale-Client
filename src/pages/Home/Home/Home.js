import React from 'react';
import NotFOund404 from '../../NotFoundPages/NotFound404/NotFOund404';
import ProductsCategories from '../ProductsCategories/ProductsCategories';

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-5xl">This is Home</h1> */}
            <ProductsCategories></ProductsCategories>
            
        </div>
    );
};

export default Home;