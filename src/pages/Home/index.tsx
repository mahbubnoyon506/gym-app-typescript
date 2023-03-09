import GlobalBtn from '../../shared/GlobalBtn';
import React from 'react';
import homePageText from '../../assets/HomePageText.png'
import homePageGraphic from '../../assets/HomePageGraphic.png'
import evolveText from '../../assets/EvolveText.png'
import redbull from '../../assets/SponsorRedBull.png'
import fortune from '../../assets/SponsorFortune.png'
import forbes from '../../assets/SponsorForbes.png'
import { Link } from 'react-router-dom';
import HomeMain from './HomeMain';
import OurClasses from '../Classes';
import Benefits from '../Benefits';
import Contact from '../Contact';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
        <HomeMain />
        <Benefits />
        <OurClasses />
        <Contact />
        </div>
    );
};

export default Home;