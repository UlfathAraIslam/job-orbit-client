import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Shared/Navbar';
import Footer from '../pages/Home/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;