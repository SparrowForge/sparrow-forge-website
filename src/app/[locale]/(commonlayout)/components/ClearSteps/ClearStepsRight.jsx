"use client";

import { useEffect, useRef } from "react";
import { useLocalization } from "@/hooks/useLocalization";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import ClearStepsCard from "../../card/ClearStepsCard";

const ClearStepsRight = () => {
  const t = useLocalization();
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
    <div className="flex-1 relative h-full flex justify-center md:ml-32">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 4 },
        }}
        modules={[Mousewheel]}
        className="w-full h-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
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
