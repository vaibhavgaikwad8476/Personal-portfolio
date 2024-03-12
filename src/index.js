import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Home/Home';
import AboutMe from './AboutUs/AboutMe';
import Project from './Project/Project';
import ContactUs from './ContactUs/ContactUs';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/Project',
        element:<Project/>
    },
    {
        path:'/AboutMe',
        element:<AboutMe/>
    },
    {
        path:'/ContactUs',
        element:<ContactUs/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <>
 <RouterProvider router={router}/>
 </>
);


