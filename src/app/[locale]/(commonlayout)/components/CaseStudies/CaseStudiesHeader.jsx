"use client";
import React from "react";

import { useTranslations } from "next-intl";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import Title from "../../shared/Title";
import Button from "../../shared/Button";

const CaseStudiesHeader = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2 md:gap-4 p-2 md:p-0">
      <div className="w-full md:w-2/4">
        <Title
          title={t(LOCALE_KEYS.CASE_STUDIES_TITLE)}
          subtitle={t(LOCALE_KEYS.CASE_STUDIES_SUBTITLE)}
          className="flex flex-col justify-center items-start gap-0 md:gap-4 md:my-16"
        />
      </div>
      <Button
        image="/bannerImg/arrowRightUp.svg"
        title={t(LOCALE_KEYS.CASE_STUDIES_BUTTON)}
        className="bg-lightblue/10 text-lightblue text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full animation-zoom-out-hover"
      />
    </div>
  );
};

export default CaseStudiesHeader;
