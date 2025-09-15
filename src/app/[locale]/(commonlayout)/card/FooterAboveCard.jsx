"use client";

import React from "react";
import Button from "../shared/Button";
import { useLocalization } from "@/hooks/useLocalization";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const FooterAboveCard = () => {
  const { t } = useLocalization();

  return (
    <div className="pt-10 pb-6 px-10 md:px-40 md:w-[1028px] md:h-[372px] flex flex-col justify-center items-center gap-2 md:gap-[32px] rounded-[56px] bg-lightblue text-white text-center">
      <h1 className="text-[24px] md:text-[44px] font-bold">
        {t(LOCALE_KEYS.TURN_IDEAS)}
      </h1>
      <p className="text-[12px] md:text-[20px]">
        {t(LOCALE_KEYS.TURN_IDEAS_DESC)}
      </p>

      <div className="border border-white p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px]">
        <Button
          image="/shared/buttonarrow.svg"
          title={t(LOCALE_KEYS.GET_STARTED)}
          className="bg-white text-lightblue px-6 py-3 rounded-full "
        />
      </div>
    </div>
  );
};

export default FooterAboveCard;
