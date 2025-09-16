'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { useTranslations } from "next-intl";
import ClearStepsCard from "../../card/ClearStepsCard";


const ClearStepsRrightMB = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
     const t  = useTranslations()


    const cards = [
        {
            title: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD1.TITLE),
            step: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD1.STEP),
            icon: "/ClearSteps/1.svg",
            des1: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD1.DES1),
            des2: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD1.DES2),
            des3: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD1.DES3),
        },
        {
            title: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD2.TITLE),
            step: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD2.STEP),
            icon: "/ClearSteps/2.svg",
            des1: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD2.DES1),
            des2: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD2.DES2),
            des3: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD2.DES3),
        },
        {
            title: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD3.TITLE),
            step: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD3.STEP),
            icon: "/ClearSteps/3.svg",
            des1: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD3.DES1),
            des2: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD3.DES2),
            des3: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD3.DES3),
        },
        {
            title: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD4.TITLE),
            step: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD4.STEP),
            icon: "/ClearSteps/4.svg",
            des1: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD4.DES1),
            des2: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD4.DES2),
            des3: t(LOCALE_KEYS.CLEARSTEPS_CARD.CARD4.DES3),
        },
    ];

    return (
        <div className="w-full py-10 relative ">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}   // ✅ keeps active slide in center
                modules={[Navigation]}
                className="!px-6"       // ✅ adds padding so it doesn’t stick to edges
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
                        {/* ✅ force slide content to be centered */}
                        <ClearStepsCard
                            step={card.step}
                            title={card.title}
                            icon={card.icon}
                            des1={card.des1}
                            des2={card.des2}
                            des3={card.des3}
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

export default ClearStepsRrightMB;
