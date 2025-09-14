'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ClientsSaysCard from "../card/ClientsSaysCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Emily Chen.",
    role: "Product Manager at BrightApps",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    number: "01",
    feedback:
      "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We’ve seen a real impact on our business.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Lee",
    role: "CTO at TechWave",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    number: "02",
    feedback:
      "Working with Sparrow Forge has been a game-changer. The team is proactive and results-driven. Highly recommended for any growing business.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Brown",
    role: "CEO at CloudWorks",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    number: "03",
    feedback:
      "They understood our vision and delivered beyond expectations. The whole process was smooth, and the outcome was fantastic.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Chen.",
    role: "Product Manager at BrightApps",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    number: "04",
    feedback:
      "From design to development, Sparrow Forge exceeded our expectations. Communication was clear, and the results were outstanding. We’ve seen a real impact on our business.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Lee",
    role: "CTO at TechWave",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    number: "05",
    feedback:
      "Working with Sparrow Forge has been a game-changer. The team is proactive and results-driven. Highly recommended for any growing business.",
    rating: 4,
  },
  {
    id: 6,
    name: "Sophia Brown",
    role: "CEO at CloudWorks",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    number: "06",
    feedback:
      "They understood our vision and delivered beyond expectations. The whole process was smooth, and the outcome was fantastic.",
    rating: 5,
  },
];

const ClientsSaysSlider = () => {
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
          0: { slidesPerView: 1 },     // default small
          1024: { slidesPerView: 3 },  // large screens
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
          className={`p-2 rounded-full border transition-colors ${isBeginning
            ? " border-lightblue"
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
          className={`p-2 rounded-full border transition-colors ${isEnd
            ? " border-lightblue"
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

export default ClientsSaysSlider;
