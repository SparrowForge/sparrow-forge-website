'use client'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ClearStepsCard from "../card/ClearStepsCard";
// import ClearStepsCard from "../card/ClearStepsCard"; // 👈 uncomment and adjust path

const cards = [
  {
    title: "Zero-risk assessment, tailored roadmap",
    step: "Step 01",
    icon: "/newDesign/ClearSteps/1.svg",
    des1: "Free 60-min strategy session to analyze your tech stack",
    des2: "AI-driven scoping tool estimates time/cost savings",
    des3: "Receive a GDPR/ISO 2701-compliant project blueprint",
  },
  {
    title: "Right talent + AI tools from day one",
    step: "Step 02",
    icon: "/newDesign/ClearSteps/2.svg",
    des1: "Match with vetted engineers (800+ experts)",
    des2: "AI-augmented sprint planning for 30% faster kickoff",
    des3: "Dedicated PM + automated progress dashboards",
  },
  {
    title: "Smarter Coding, Testing, and Deployment",
    step: "Step 03",
    icon: "/newDesign/ClearSteps/3.svg",
    des1: "AI pair-programming assistants (70% faster dev)",
    des2: "Self-healing test suites (99.9% reliability)",
    des3: "Real-time compliance checks (ISO 27001 baked in)",
  },
  {
    title: "Automating your growth every step of the way",
    step: "Step 04",
    icon: "/newDesign/ClearSteps/4.svg",
    des1: "AI-optimized cloud deployment",
    des2: "Continuous performance monitoring & predictive scaling",
    des3: "90-day post-launch support with AI-driven analytics",
  },
];

const ClearStepsRrightMB = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
          className={`p-2 rounded-full border transition-colors ${
            isBeginning
              ? "bg-white border-lightblue"
              : "bg-lightblue hover:bg-blue-600 border-lightblue"
          }`}
        >
          <FaAngleLeft
            className={`text-2xl ${
              isBeginning ? "text-lightblue" : "text-white"
            }`}
          />
        </button>

        <button
          onClick={() => swiperInstance?.slideNext()}
          disabled={isEnd}
          className={`p-2 rounded-full border transition-colors ${
            isEnd
              ? "bg-white border-lightblue"
              : "bg-lightblue hover:bg-blue-600 border-lightblue"
          }`}
        >
          <FaAngleRight
            className={`text-2xl ${
              isEnd ? "text-lightblue" : "text-white"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ClearStepsRrightMB;
