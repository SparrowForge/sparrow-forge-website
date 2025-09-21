"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import Button from "../../shared/Button";

const Estimated = () => {
  const [activeTab, setActiveTab] = useState("about");
  const t = useTranslations();

  const content = {
    about: {
      title: t.raw(LOCALE_KEYS.ABOUT_TITLE), // raw() preserves <span>
      description: t(LOCALE_KEYS.ABOUT_DESCRIPTION),
      stats: [
        { value: "250+", label: t(LOCALE_KEYS.STATS_PROJECTS) },
        { value: "15+", label: t(LOCALE_KEYS.STATS_YEARS) }
      ],
      image: "/team/team.jpg"
    },
    who: {
      title: t.raw(LOCALE_KEYS.WHO_TITLE),
      description: t(LOCALE_KEYS.WHO_DESCRIPTION),
      stats: [
        { value: "50+", label: t(LOCALE_KEYS.STATS_TEAM) },
        { value: "10+", label: t(LOCALE_KEYS.STATS_INDUSTRIES) }
      ],
      image: "/team/3.jpg"
    }
  };

  const current = content[activeTab];

  return (
    <div className="w-full bg-deepblue text-white py-10 px-4 md:p-16">
      <div className="w-full md:w-[1194px] md:mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          {/* Tabs */}
          <div className="flex gap-3">
            <div className="rounded-full bg-lightblue/10 p-2">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  activeTab === "about"
                    ? "bg-white text-deepblue font-semibold"
                    : ""
                }`}
              >
                {t(LOCALE_KEYS.ABOUT)}
              </button>
              <button
                onClick={() => setActiveTab("who")}
                className={`px-4 py-1 rounded-full text-sm transition ${
                  activeTab === "who"
                    ? "bg-white text-deepblue font-semibold"
                    : ""
                }`}
              >
                {t(LOCALE_KEYS.WHO)}
              </button>
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-2xl md:text-4xl font-bold leading-snug"
            dangerouslySetInnerHTML={{ __html: current.title }}
          />

          {/* Description */}
          <p className="text-gray-300">{current.description}</p>


          <Button
            image="/bannerImg/arrowRightUpWhite.svg"
            title={t(LOCALE_KEYS.ABOUT)}
            className="bg-lightblue text-white text-sm md:text-[14px] px-4 py-2 rounded-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <Image
            src={current.image}
            alt="Team"
            width={450}
            height={450}
            className="rounded-xl object-cover md:h-[380px]"
          />

          {/* Stats 1 */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:bottom-4 md:left-4 md:translate-x-0 bg-gray-600 px-2 sm:px-4 md:px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md w-24 sm:w-32 md:w-40 text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-3xl font-bold">
              {current.stats[0].value}
            </p>
            <p className="text-gray-300">{current.stats[0].label}</p>
          </div>

          {/* Stats 2 */}
          <div className="absolute -top-10 right-1/2 translate-x-1/2 md:top-4 md:right-4 md:translate-x-0 bg-gray-600 px-2 sm:px-4 md:px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md w-24 sm:w-32 md:w-40 text-center md:text-right">
            <p className="text-lg sm:text-xl md:text-3xl font-bold">
              {current.stats[1].value}
            </p>
            <p className="text-gray-300">{current.stats[1].label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estimated;
