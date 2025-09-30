"use client";

import { useEffect, useRef } from "react";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import ClearStepsCard from "../../card/ClearStepsCard";
import { useTranslations } from "next-intl";

const ClearStepsRight = () => {
  const t = useTranslations();
  const swiperRef = useRef();

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

  useEffect(() => {
    const handleWheel = (e) => {
      if (!swiperRef.current) return;
      if (e.deltaY > 0) swiperRef.current.slideNext();
      else swiperRef.current.slidePrev();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex-1 relative h-auto lg:h-full flex justify-center lg:ml-32">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
         breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 6 },   // small tablets
          768: { slidesPerView: 3, spaceBetween: 20 },   // medium tablets
          1024: { slidesPerView: 4, spaceBetween: 40 },  // large tablets / laptops
          1280: { slidesPerView: 4, spaceBetween: 20 },  // desktops
          1536: { slidesPerView: 4, spaceBetween: 20 },  // xl screens
        }}
        modules={[Mousewheel]}
        className="w-full h-auto lg:h-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="!h-auto flex justify-center">
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
    </div>
  );
};

export default ClearStepsRight;
