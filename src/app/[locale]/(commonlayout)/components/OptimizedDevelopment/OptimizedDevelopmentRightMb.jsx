"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import OptimizedDevelopmentCard from '../../card/OptimizedDevelopmentCard';
import { LOCALE_KEYS } from '@/constants/localizationKeys';
import { useTranslations } from 'next-intl';


const OptimizedDevelopmentRightMb = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const t = useTranslations();

     const cards = [
    {
      value: "70%",
      title: t(LOCALE_KEYS.OPT_DEV_INTELLIGENT_CODING_TITLE),
      subtitle: t(LOCALE_KEYS.OPT_DEV_INTELLIGENT_CODING_SUBTITLE),
      description: t(LOCALE_KEYS.OPT_DEV_INTELLIGENT_CODING_DESC),
    },
    {
      value: "99.9%",
      title: t(LOCALE_KEYS.OPT_DEV_BULLETPROOF_QA_TITLE),
      subtitle: t(LOCALE_KEYS.OPT_DEV_BULLETPROOF_QA_SUBTITLE),
      description: t(LOCALE_KEYS.OPT_DEV_BULLETPROOF_QA_DESC),
    },
    {
      value: "40%",
      title: t(LOCALE_KEYS.OPT_DEV_PEAK_PERFORMANCE_TITLE),
      subtitle: t(LOCALE_KEYS.OPT_DEV_PEAK_PERFORMANCE_SUBTITLE),
      description: t(LOCALE_KEYS.OPT_DEV_PEAK_PERFORMANCE_DESC),
    },
    {
      value: "90%",
      title: t(LOCALE_KEYS.OPT_DEV_ZERO_DOWNTIME_TITLE),
      subtitle: t(LOCALE_KEYS.OPT_DEV_ZERO_DOWNTIME_SUBTITLE),
      description: t(LOCALE_KEYS.OPT_DEV_ZERO_DOWNTIME_DESC),
    },
  ];
    return (
        <div className="w-full relative ">
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
                        className={`text-xl ${isBeginning ? "text-lightblue" : "text-white"
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
                        className={`text-xl ${isEnd ? "text-lightblue" : "text-white"
                            }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default OptimizedDevelopmentRightMb;