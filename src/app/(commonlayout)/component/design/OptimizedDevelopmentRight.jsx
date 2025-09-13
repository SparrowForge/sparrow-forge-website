"use client";
import { useEffect, useRef } from "react";
import OptimizedDevelopmentCard from "../card/OptimizedDevelopmentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

const OptimizedDevelopmentRight = () => {
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
    </div>
  );
};

export default OptimizedDevelopmentRight;
