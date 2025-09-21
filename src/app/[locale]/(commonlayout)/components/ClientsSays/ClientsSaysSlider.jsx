"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ClientsSaysCard from "../../card/ClientsSaysCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { useTranslations } from "next-intl";

const ClientsSaysSlider = () => {
  const t = useTranslations();

  const testimonials = [
    {
      id: 1,
      name: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[1].NAME),
      role: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[1].ROLE),
      image: "/client_say/1.jpg",
      number: "01",
      feedback: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[1].FEEDBACK),
      rating: 5,
    },
    {
      id: 2,
      name: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[2].NAME),
      role: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[2].ROLE),
      image: "/client_say/2.jpg",
      number: "02",
      feedback: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[2].FEEDBACK),
      rating: 4,
    },
    {
      id: 3,
      name: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[3].NAME),
      role: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[3].ROLE),
      image: "/client_say/3.jpg",
      number: "03",
      feedback: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[3].FEEDBACK),
      rating: 5,
    },
    {
      id: 4,
      name: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[4].NAME),
      role: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[4].ROLE),
      image: "/client_say/1.jpg",
      number: "04",
      feedback: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[4].FEEDBACK),
      rating: 5,
    },
    {
      id: 5,
      name: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[5].NAME),
      role: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[5].ROLE),
      image: "/client_say/2.jpg",
      number: "05",
      feedback: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[5].FEEDBACK),
      rating: 4,
    },
    {
      id: 6,
      name: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[6].NAME),
      role: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[6].ROLE),
      image: "/client_say/3.jpg",
      number: "06",
      feedback: t(LOCALE_KEYS.CLIENTS.TESTIMONIALS[6].FEEDBACK),
      rating: 5,
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full py-10 relative">
      <Swiper
        spaceBetween={20}
        modules={[Navigation]}
        className="px-6"
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <ClientsSaysCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className={`p-2 rounded-full border transition-colors ${
            isBeginning
              ? " border-lightblue"
              : "bg-lightblue hover:bg-blue-600 border-lightblue"
          }`}
        >
          <FaAngleLeft
            className={`text-2xl ${isBeginning ? "text-lightblue" : "text-white"}`}
          />
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          className={`p-2 rounded-full border transition-colors ${
            isEnd
              ? " border-lightblue"
              : "bg-lightblue hover:bg-blue-600 border-lightblue"
          }`}
        >
          <FaAngleRight
            className={`text-2xl ${isEnd ? "text-lightblue" : "text-white"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ClientsSaysSlider;
