import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'

type ClassItems = {
    name: string,
    description?: string,
    image: string
}

const Carousel = () => {
    const swiperRef = useRef<any>(null);
    const onInit = (Swiper: any) => {
        swiperRef.current = Swiper;
    };
    const handleMouseEnter = () => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                onInit={onInit}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                speed={2000}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="swiperOurClasses"
            >
                {
                    classes.map((item, index) =>
                        <SwiperSlide>
                            <div className="w-full h-72" style={{background: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
                               <div>
                                  <h4>{item.name}</h4>
                                  <p>{item?.description}</p>
                               </div>
                            </div>
                        </SwiperSlide>
                    )
                }
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Carousel;

const classes: ClassItems[] = [
    {
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
];