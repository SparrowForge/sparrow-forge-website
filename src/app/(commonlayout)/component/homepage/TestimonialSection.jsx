"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const data = [
    {
        id: 1,
        name: "Emily Chen",
        role: "Product Manager at BrightApps",
        rating: 4.8,
        feedback:
            "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We've seen a real impact on our business.",
        image: "/slideImages/image 25.svg",
    },
    {
        id: 2,
        name: "Emily Chen",
        role: "Product Manager at BrightApps",
        rating: 4.8,
        feedback:
            "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We've seen a real impact on our business.",
        image: "/slideImages/image 25.svg",
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Product Manager at BrightApps",
        rating: 4.8,
        feedback:
            "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We've seen a real impact on our business.",
        image: "/slideImages/image 25.svg",
    },
    {
        id: 4,
        name: "Emily Chen",
        role: "Product Manager at BrightApps",
        rating: 4.8,
        feedback:
            "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We've seen a real impact on our business.",
        image: "/slideImages/image 25.svg",
    },
    {
        id: 5,
        name: "Emily Chen",
        role: "Product Manager at BrightApps",
        rating: 4.8,
        feedback:
            "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We've seen a real impact on our business.",
        image: "/slideImages/image 25.svg",
    },
];

const TestimonialSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full md:px-4 md:my-10 bg-white">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                navigation={true}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Keyboard, Navigation]}
                className="mySwiper"
            >
                {data.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="relative flex justify-center items-center w-full pb-12 pt-24">
                            <div className="bg-gray mx-10 p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
                                <div className="w-full md:w-2/3 relative text-center md:text-left">
                                    <div className="text-4xl text-orange mb-4">
                                        <Image
                                            src="/slideImages/cuatation.svg"
                                            alt="image"
                                            width={100}
                                            height={100}
                                            className="w-4 md:w-9"
                                        />
                                    </div>
                                    <p className="text-[14px] md:text-[28px] text-green font-medium md:mb-20">
                                        {testimonial.feedback}
                                    </p>
                                    <div className="w-28 h-28 flex md:hidden justify-center items-center mx-auto my-2">
                                        <Image
                                            width={30}
                                            height={30}
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-auto h-auto rounded-full"
                                        />
                                    </div>
                                    <div className="font-semibold text-[#0f172a] text-base md:text-lg">
                                        {testimonial.name}
                                        <span className="text-yellow-500 ml-2">
                                            {"★".repeat(Math.floor(testimonial.rating))}
                                        </span>
                                        <span className="text-gray-500 text-sm ml-1">
                                            ({testimonial.rating}/5)
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-600 italic">{testimonial.role}</div>
                                </div>
                            </div>

                            <div className="hidden md:flex justify-center absolute md:right-20 md:bottom-12 z-50 w-full md:w-1/3">
                                <Image
                                    width={100}
                                    height={100}
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-auto h-[500px] 2xl:h-[450px] rounded-xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination dots */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {data.map((_, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)} 
                            className={`cursor-pointer transition-all duration-300 rounded-full ${isActive ? "w-8 h-2 md:w-9 md:h-3 bg-orange" : "w-2 h-2 md:w-3 md:h-3 bg-orange/50"
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TestimonialSection;
