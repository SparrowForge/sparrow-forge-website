"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
    {
        id: 1,
        name: "Our Vision",
        subtitle:
            "Known for our quality, creativity, and commitment to delivering real value through every solution.",
        image: "/story/slider1.svg",
    },
    {
        id: 2,
        name: "Our Mission",
        subtitle:
            "Known for our quality, creativity, and commitment to delivering real value through every solution.",
        image: "/story/slider1.svg",
    },
    {
        id: 3,
        name: "Our Promise",
        subtitle:
            "Known for our quality, creativity, and commitment to delivering real value through every solution.",
        image: "/story/slider1.svg",
    },
    {
        id: 4,
        name: "Our Process",
        subtitle:
            "Known for our quality, creativity, and commitment to delivering real value through every solution.",
        image: "/story/slider1.svg",
    },
    {
        id: 5,
        name: "Our Legacy",
        subtitle:
            "A decade of excellence in creating cutting-edge digital solutions.",
        image: "/story/slider1.svg",
    },
];

const OurStorySlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full py-16">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Keyboard]}
                className="mySwiper"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="relative w-full h-[500px] rounded-xl overflow-hidden bg-cover bg-center flex items-end justify-start"
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                        >
                            <div className="z-10  text-start text-white  px-6 mb-10">
                                <h2 className="text-[28px]  font-bold mb-2 drop-shadow-lg">
                                    {item.name}
                                </h2>
                                <p className="text-[14px] md:mr-[160vh] ">
                                    {item.subtitle}
                                </p>
                            </div>
                            {/* <div className="absolute inset-0 bg-black/40"></div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination dots */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {data.map((_, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)} 
                            className={`cursor-pointer transition-all duration-300 rounded-full ${isActive ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/50"
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default OurStorySlider;
