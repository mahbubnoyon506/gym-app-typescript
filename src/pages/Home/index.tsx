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
        <>
        <HomeMain />
        <Benefits />
        <OurClasses />
        <Contact />
        </>
        // <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        //     <div className='grid md:grid-cols-2 gap-10 items-center'>
        //         <div className='px-5 md:pl-10 lg:pl-20'>
        //             <div className="relative">
        //                 <div className={`before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-${evolveText}`}>
        //                     <img alt="home-page-text" src={homePageText} />
        //                 </div>
        //             </div>
        //             <p className="mt-8 text-sm">
        //                 Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
        //                 Studios to get the Body Shapes That you Dream of.. Get Your Dream
        //                 Body Now.
        //             </p>
        //             <div className='mt-5'>
        //                 <Link to='/contact' className='' ><GlobalBtn>Join Now</GlobalBtn></Link>
        //             </div>
        //         </div>
        //         <div>
        //             <img src={homePageGraphic} alt="" />
        //         </div>
        //     </div>
        //     <div className='flex justify-start items-center bg-primary-300 py-5 md:py-8 lg:py-12 pl-5 md:pl-10 lg:pl-20'>
        //        <img className='' src={redbull} alt="" />
        //        <img className='mx-20' src={fortune} alt="" />
        //        <img className='' src={forbes} alt="" />
        //     </div>
        // </section>
    );
};

export default Home;