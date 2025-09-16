"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import OptimizedDevelopmentCard from "../../card/OptimizedDevelopmentCard";
import { useTranslations } from "next-intl";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const OptimizedDevelopmentRight = () => {
  const swiperRef = useRef();
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

  useEffect(() => {
    const handleWheel = (e) => {
      if (!swiperRef.current) return;

      if (e.deltaY > 0) {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
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
            <OptimizedDevelopmentCard
              value={card.value}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OptimizedDevelopmentRight;
