"use client";
import React from "react";
import { useTranslations } from "next-intl"; // or from "react-i18next"
import Title from "../../shared/Title";
import WorldMapWithLocations from "../../components/OurGlobalFamily/WorldMapWithLocations";
import { LOCALE_KEYS } from "@/constants/localizationKeys";


const OurGlobalFamily = () => {
  const t = useTranslations(); 

  return (
    <div className="flex flex-col justify-between items-center py-10">
      <Title
        title={t(LOCALE_KEYS.OUR_GLOBAL_FAMILY_TITLE)}
        subtitle={t(LOCALE_KEYS.OUR_GLOBAL_FAMILY_SUBTITLE)}
        className="flex flex-col justify-center items-center gap-4 my-4 mx-0 lg:mx-72 text-center"
      />
      <WorldMapWithLocations />
    </div>
  );
};

export default OurGlobalFamily;
