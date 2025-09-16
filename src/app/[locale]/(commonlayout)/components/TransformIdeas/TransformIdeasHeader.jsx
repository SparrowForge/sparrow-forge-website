"use client";

import { useTranslations } from "next-intl";
import Button from "../../shared/Button";
import Title from "../../shared/Title";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const TransformIdeasHeader = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:gap-4">
      <div className="w-full md:w-2/4">
        <Title
          title={t(LOCALE_KEYS.TRANSFORM_IDEAS_HEADER)}
          className="flex flex-col justify-center items-start gap-4 md:my-16"
        />
      </div>
      <Button
        image="/bannerImg/arrowRightUp.svg"
        title={t(LOCALE_KEYS.LETS_TALK)}
        className="bg-lightblue/10 text-lightblue text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full animation-zoom-out-hover"
      />
    </div>
  );
};

export default TransformIdeasHeader;
