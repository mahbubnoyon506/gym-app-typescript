import React from 'react';
import Carousel from './Carousel';

const OurClasses = () => {
    return (
        <section className='overflow-x-hidden'>
            <div className='bg-primary-100'>
                <div className='px-5 md:px-10 lg:px-20 pt-6 md:pt-12 lg:pt-28'>
                    <h3 className='text-lg md:text-xl lg:text-3xl font-extrabold text-left'>Our Classes</h3>
                    <p className="py-5">
                        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.
                    </p>
                </div>
                <div className='pb-6 md:pb-12 lg:pb-28'>
                    <Carousel />
                </div>
            </div>
        </section>
    );
};

export default OurClasses;