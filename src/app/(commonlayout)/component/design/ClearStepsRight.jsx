"use client";

import { useEffect, useRef } from "react";
import ClearStepsCard from "../card/ClearStepsCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

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

const ClearStepsRight = () => {
  const swiperRef = useRef();

  useEffect(() => {
    const handleWheel = (e) => {
      if (!swiperRef.current) return;

      if (e.deltaY > 0) {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    };

    // Attach to whole window
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="flex-1 relative h-full flex justify-center">
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
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
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
