import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import OurBenefits from '../pages/OurBenefits'

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <OurBenefits />
            <Footer />
        </div>
    );
};

export default Main;