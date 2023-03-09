
import React from 'react';
import { FaGraduationCap, FaHome, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SmallBtn from '../../shared/SmallBtn';
import benefitGraphic from '../../assets/BenefitsPageGraphic.png'
import sparkle from '../../assets/Sparkles.png'
import wave from '../../assets/AbstractWaves.png'
import GlobalBtn from '../../shared/GlobalBtn';



const Benefits = () => {
    return (
        <section className='overflow-x-hidden'>
            <div className='px-5 md:px-10 lg:px-20 pt-6 md:pt-12 lg:pt-28'>
                <div className=''>
                    <h3 className='text-lg md:text-xl lg:text-3xl font-extrabold'>MORE THAN JUST GYM.</h3>
                    <p className="my-5">We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.</p>
                </div>
                <div className='md:grid grid-cols-3 md:gap-5 lg:gap-10'>
                    {
                        services.map((service) =>
                            <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
                                <div className="mb-4 flex justify-center">

                                    <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                                        {service.icon}
                                    </div>
                                </div>
                                <h4 className='font-bold text-center py-5'>{service.title}</h4>
                                <p className='text-center'>{service.description}</p>
                                <div className='mt-5'>

                                    <Link to='#' className=''> <SmallBtn>Learn More</SmallBtn> </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <div className="md:grid grid-cols-2 items-center md:gap-5 lg:gap-20 py-6 md:py-12 lg:py-28">
                    <div className='px-5 md:pl-10 lg:pl-20'>
                        <img src={benefitGraphic} alt="" />
                    </div>
                    <div className='relative px-5 md:pr-10 lg:pr-20'>
                        <div className=' invisible md:visible absolute md:-top-6 md:-left-6 lg:-top-20 lg:-left-16 -z-10'>
                            <img className='md:w-3/4 lg:w-full' src={wave} alt="" />
                        </div>
                        <h3 className='text-lg md:text-xl lg:text-3xl font-extrabold text-left z-10'>MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span> </h3>
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className="mb-7">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                        <div className='relative'>
                            <div className='z-10'>
                                <GlobalBtn>Join Now</GlobalBtn>
                            </div>
                            <div className='invisible md:visible absolute md:left-24 md:-top-5 lg:left-24 lg:top-0 -z-10'>
                                <img className='md:w-3/4 lg:w-full' src={sparkle} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

const services = [
    {
        icon: <FaHome className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <FaUsers className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <FaGraduationCap className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]