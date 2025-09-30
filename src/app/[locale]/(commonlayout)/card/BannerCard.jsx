"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { useLocalization } from "@/hooks/useLocalization";

const bannerData = [
  { id: 1, image: "/bannerImg/1.svg", titleKey: LOCALE_KEYS.WEB_APP_TITLE, descriptionKey: LOCALE_KEYS.WEB_APP_DESC },
  { id: 2, image: "/bannerImg/2.svg", titleKey: LOCALE_KEYS.IT_CONSULTING_TITLE, descriptionKey: LOCALE_KEYS.IT_CONSULTING_DESC },
  { id: 3, image: "/bannerImg/3.svg", titleKey: LOCALE_KEYS.CUSTOM_SOFTWARE_TITLE, descriptionKey: LOCALE_KEYS.CUSTOM_SOFTWARE_DESC },
  { id: 4, image: "/bannerImg/4.svg", titleKey: LOCALE_KEYS.IOT_TITLE, descriptionKey: LOCALE_KEYS.IOT_DESC },
  { id: 5, image: "/bannerImg/5.svg", titleKey: LOCALE_KEYS.UI_UX_TITLE, descriptionKey: LOCALE_KEYS.UI_UX_DESC },
  { id: 6, image: "/bannerImg/6.svg", titleKey: LOCALE_KEYS.CYBERSECURITY_TITLE, descriptionKey: LOCALE_KEYS.CYBERSECURITY_DESC },
];

export default function BannerCard() {
  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState([]);
  const timeoutRef = useRef(null);
  const { t } = useLocalization();

  const next = () => setIndex((prev) => (prev + 1) % bannerData.length);

  const calculatePositions = () => {
    const width = window.innerWidth;

    if (width < 640) {
      // mobile
      setPositions([
        { x: 0, y: -50, scale: 0.85, zIndex: 3 },
        { x: -50, y: 50, scale: 0.8, zIndex: 2 },
        { x: 50, y: 50, scale: 0.8, zIndex: 2 },
      ]);
    } else if (width < 1024) {
      // tablet
      setPositions([
        { x: 0, y: -80, scale: 0.95, zIndex: 3 },
        { x: -100, y: 80, scale: 0.9, zIndex: 2 },
        { x: 100, y: 80, scale: 0.9, zIndex: 2 },
      ]);
    } else {
      // desktop
      setPositions([
        { x: 0, y: -120, scale: 1, zIndex: 3 },
        { x: -180, y: 120, scale: 0.9, zIndex: 2 },
        { x: 180, y: 120, scale: 0.9, zIndex: 2 },
      ]);
    }
  };

  useEffect(() => {
    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const cards = [
    bannerData[index % bannerData.length],
    bannerData[(index + 1) % bannerData.length],
    bannerData[(index + 2) % bannerData.length],
  ];

  const Card = ({ item }) => (
    <div className="relative bg-white px-4  py-4  rounded-2xl shadow-lg w-[100px] md:w-[180px] lg:w-[280px] h-32 lg:h-[200px]">
      <Image
        src={item.image}
        alt={t(item.titleKey)}
        width={40}
        height={40}
        className="mx-auto mb-3"
      />
      <h3 className="text-[12px] sm:text-[14px] font-semibold text-center">{t(item.titleKey)}</h3>
      <p className="hidden lg:flex text-[10px] sm:text-[12px] text-gray-600 text-center mt-1">{t(item.descriptionKey)}</p>
    </div>
  );

  return (
    <div className="relative hidden  md:flex justify-center items-center w-full h-[260px] sm:h-[300px] lg:h-[400px]">
      {cards.map((item, i) => (
        <motion.div
          key={item.id}
          initial={false}
          animate={positions[i] || {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute"
        >
          <Card item={item} />
        </motion.div>
      ))}
    </div>
  );
}
