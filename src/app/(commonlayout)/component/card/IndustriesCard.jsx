"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const data = [
    { id: 1, name: "Fintech", image: "/industrySlide/1.svg" },
    { id: 2, name: "Healthcare", image: "/industrySlide/2.svg" },
    { id: 3, name: "Telco", image: "/industrySlide/3.svg" },
    { id: 4, name: "E-Commerce", image: "/industrySlide/4.svg" },
    { id: 5, name: "Automation", image: "/industrySlide/5.svg" },
    { id: 6, name: "Startup", image: "/industrySlide/6.svg" },
];

const IndustriesCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = data.length;

    return (
        <div className="my-10">
            <Swiper
                spaceBetween={40}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {data.map((item, index) => {
                    const secondIndex = (activeIndex + 4) % length;
                    const isActive = index === activeIndex;
                    const isSecond = index === secondIndex;

                    return (
                        <SwiperSlide key={item.id}>
                            <div className="">
                                <div className="relative hover:border hover:border-lightblue rounded-xl transition-opacity duration-300">
                                    <div className="group flex flex-col items-center py-8 px-4 bg-gray hover:bg-lightblue hover:text-white rounded-lg m-2">
                                    <div className="transition duration-300">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={item.image}
                                            alt={item.name}
                                            className="filter invert-0 group-hover:invert mb-4"
                                        />
                                    </div>
                                    <h4 className="text-lg font-semibold text-center">
                                        {item.name}
                                    </h4>
                                </div>
                                </div>
                                

                                {/* blur effect */}
                                {isActive && (
                                    <div className="hidden md:flex absolute inset-0 rounded-xl bg-gradient-to-r from-white via-white/80 to-transparent z-10 transition duration-300"></div>
                                )}
                                {isSecond && (
                                    <div className="hidden md:flex absolute inset-0 rounded-xl  bg-gradient-to-l from-white via-white/80 to-transparent z-10 transition duration-300"></div>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default IndustriesCard;
