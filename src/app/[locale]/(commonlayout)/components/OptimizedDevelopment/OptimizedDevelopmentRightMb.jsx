"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import OptimizedDevelopmentCard from '../../card/OptimizedDevelopmentCard';

const cards = [
  {
    value: "70%",
    subtitle: "/ Faster Development",
    title: "Intelligent Coding",
    description:
      "AI-powered code synthesis and auto-completion reduce manual effort while maintaining enterprise-grade standards.",
  },
  {
    value: "99.9%",
    subtitle: "/ Defect-Free Releases",
    title: "Bulletproof QA",
    description:
      "Self-learning test suites detect bugs early, with automated fixes for flawless deployments.",
  },
  {
    value: "40%",
    subtitle: "/ Higher Efficiency",
    title: "Peak Performance",
    description:
      "ML algorithms optimize resource allocation, predict scaling needs, and eliminate bottlenecks in real-time.",
  },
  {
    value: "90%",
    subtitle: "/ Faster Deployments",
    title: "Zero-Downtime DevOps",
    description:
      "AI-driven CI/CD pipelines automate rollbacks and canary releases for seamless updates.",
  },
];
const OptimizedDevelopmentRightMb = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    return (
        <div className="w-full py-10 relative ">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}   
                modules={[Navigation]}
                className="!px-6"     
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <OptimizedDevelopmentCard
                            key={index}
                            value={card.value}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 gap-4">
                <button
                    onClick={() => swiperInstance?.slidePrev()}
                    disabled={isBeginning}
                    className={`p-2 rounded-full border transition-colors ${isBeginning
                            ? "bg-white border-lightblue"
                            : "bg-lightblue hover:bg-blue-600 border-lightblue"
                        }`}
                >
                    <FaAngleLeft
                        className={`text-2xl ${isBeginning ? "text-lightblue" : "text-white"
                            }`}
                    />
                </button>

                <button
                    onClick={() => swiperInstance?.slideNext()}
                    disabled={isEnd}
                    className={`p-2 rounded-full border transition-colors ${isEnd
                            ? "bg-white border-lightblue"
                            : "bg-lightblue hover:bg-blue-600 border-lightblue"
                        }`}
                >
                    <FaAngleRight
                        className={`text-2xl ${isEnd ? "text-lightblue" : "text-white"
                            }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default OptimizedDevelopmentRightMb;