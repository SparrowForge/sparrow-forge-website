"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const bannerData = [
  {
    id: 1,
    image: "/bannerImg/1.svg",
    title: "Web & Mobile App Development",
    description:
      "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
  },
  {
    id: 2,
    image: "/bannerImg/2.svg",
    title: "IT Consulting & Support",
    description:
      "Expert guidance on technology strategies, software architecture, and ongoing support to optimize business operations.",
  },
  {
    id: 3,
    image: "/bannerImg/3.svg",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet unique business needs, ensuring efficiency, scalability, and seamless integration.",
  },
  {
    id: 4,
    image: "/bannerImg/4.svg",
    title: "IoT Solutions",
    description:
      "Connected solutions that bridge the gap between devices, data, and decisions in real-time.",
  },
  {
    id: 5,
    image: "/bannerImg/5.svg",
    title: "UI/UX Design",
    description:
      "Intuitive and engaging designs focused on enhancing customer experiences across all touchpoints.",
  },
  {
    id: 6,
    image: "/bannerImg/6.svg",
    title: "Cybersecurity",
    description:
      "Robust security solutions to safeguard your digital assets, ensuring compliance and resilience.",
  },
];

export default function BannerCardSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % bannerData.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const topCard = bannerData[index];
  const bottomLeft = bannerData[(index + 1) % bannerData.length];
  const bottomRight = bannerData[(index + 2) % bannerData.length];

  const Card = ({ item }) => (
    <div className="relative bg-white px-6 py-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl w-full sm:w-[320px] md:w-[350px] h-auto">
      <Image
        src={item.image}
        alt={item.title}
        width={40}
        height={40}
        className="mx-auto mb-4"
      />
      <h3 className="text-[16px]  font-semibold text-center">{item.title}</h3>
      <p className="text-xs  text-gray-600 text-center mt-2">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto py-12 sm:py-16">
      {/* Top card */}
      <div className="w-full flex justify-center z-10 transition-opacity duration-700 px-4 sm:px-0">
        <Card item={topCard} />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-16 w-full ">
        <div className="flex justify-center transition-all duration-700 transform hover:-translate-y-2">
          <Card item={bottomLeft} />
        </div>
        <div className="flex justify-center transition-all duration-700 transform hover:-translate-y-2">
          <Card item={bottomRight} />
        </div>
      </div>
    </div>
  );
}
