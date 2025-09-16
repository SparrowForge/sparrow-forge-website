"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { useLocalization } from "@/hooks/useLocalization";

const bannerData = [
  {
    id: 1,
    image: "/bannerImg/1.svg",
    titleKey: LOCALE_KEYS.WEB_APP_TITLE,
    descriptionKey: LOCALE_KEYS.WEB_APP_DESC,
  },
  {
    id: 2,
    image: "/bannerImg/2.svg",
    titleKey: LOCALE_KEYS.IT_CONSULTING_TITLE,
    descriptionKey: LOCALE_KEYS.IT_CONSULTING_DESC,
  },
  {
    id: 3,
    image: "/bannerImg/3.svg",
    titleKey: LOCALE_KEYS.CUSTOM_SOFTWARE_TITLE,
    descriptionKey: LOCALE_KEYS.CUSTOM_SOFTWARE_DESC,
  },
  {
    id: 4,
    image: "/bannerImg/4.svg",
    titleKey: LOCALE_KEYS.IOT_TITLE,
    descriptionKey: LOCALE_KEYS.IOT_DESC,
  },
  {
    id: 5,
    image: "/bannerImg/5.svg",
    titleKey: LOCALE_KEYS.UI_UX_TITLE,
    descriptionKey: LOCALE_KEYS.UI_UX_DESC,
  },
  {
    id: 6,
    image: "/bannerImg/6.svg",
    titleKey: LOCALE_KEYS.CYBERSECURITY_TITLE,
    descriptionKey: LOCALE_KEYS.CYBERSECURITY_DESC,
  },
];

export default function BannerCard() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const { t } = useLocalization();

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
        alt={t(item.titleKey)}
        width={40}
        height={40}
        className="mx-auto mb-4"
      />
      <h3 className="text-[16px] font-semibold text-center">{t(item.titleKey)}</h3>
      <p className="text-xs text-gray-600 text-center mt-2">
        {t(item.descriptionKey)}
      </p>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto  md:py-12">
      {/* Top card */}
      <div className="w-full flex justify-center z-10 transition-opacity duration-700 px-4 sm:px-0">
        <Card item={topCard} />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-6 mt-10 sm:mt-16 w-full ">
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
