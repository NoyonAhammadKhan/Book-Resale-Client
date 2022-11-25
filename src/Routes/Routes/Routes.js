import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Main from '../../layouts/Main/Main';
import Blogs from '../../pages/Blogs/Blogs/Blogs';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';
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

            // {
            //     path:'/category/:id',
            //     element:<Cat
            // }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>
    }
])

export default routes;