import GlobalBtn from '../../shared/GlobalBtn';
import React from 'react';
import homePageText from '../../assets/HomePageText.png'
import homePageGraphic from '../../assets/HomePageGraphic.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <div className='grid md:grid-cols-2 gap-10 items-center'>
                <div className='px-5 md:pl-10 lg:pl-20'>
                    <img src={homePageText} alt="" />
                    <p className="mt-8 text-sm">
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                    <div className='mt-5'>
                        <Link to='/contact' className='' ><GlobalBtn>Join Now</GlobalBtn></Link>
                    </div>
                </div>
                <div>
                    <img src={homePageGraphic} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;