import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Main from '../../layouts/Main/Main';
import Blogs from '../../pages/Blogs/Blogs/Blogs';
import CategoryProducts from '../../pages/CategoryProducts/CategoryProducts/CategoryProducts';
import AllBuyers from '../../pages/Dashboard/AdminDashBoard/AllBuyers/AllBuyers';
import AllSellers from '../../pages/Dashboard/AdminDashBoard/AllSellers/AllSellers';
import AddProducts from '../../pages/Dashboard/SellerDashBoard/AddProducts/AddProducts';
import MyProducts from '../../pages/Dashboard/SellerDashBoard/MyProducts/MyProducts';
import Home from '../../pages/Home/Home/Home';
import ProductsCategories from '../../pages/Home/ProductsCategories/ProductsCategories';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';
import SellerRoute from '../SellerRoute/SellerRoute';
const { createBrowserRouter } = require("react-router-dom");
const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/category/:id',
                element:<CategoryProducts></CategoryProducts>,
                loader:({params})=>fetch(`https://usedbook-noyonahammadkhan.vercel.app/categories/${params.id}`)
            }

            // {
            //     path:'/category/:id',
            //     element:<Cat
            // }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard/add-products',
                element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path:'/dashboard/my-products',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/all-buyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/all-sellers',
                element:<AllSellers></AllSellers>
            }
        ]
    }
])

export default routes;