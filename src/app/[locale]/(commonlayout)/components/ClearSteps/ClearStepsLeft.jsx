import React from 'react';
import Button from '../../shared/Button';
import { useLocalization } from '@/hooks/useLocalization';
import { LOCALE_KEYS } from '@/constants/localizationKeys';

const ClearStepsLeft = () => {
  const t = useLocalization();

  return (
    <div className="flex-1 flex flex-col justify-center gap-6 mx-6 md:mx-0">
      <h2 className="text-3xl md:text-[62px] font-bold leading-snug text-deepblue">
        {t(LOCALE_KEYS.CLEARSTEPS_TITLE)}
      </h2>
      <p className="text-gray-600 leading-relaxed max-w-lg whitespace-pre-line">
        {t(LOCALE_KEYS.CLEARSTEPS_DESCRIPTION)}
      </p>
      <div>
        <Button
          image="/bannerImg/arrowRightUpWhite.svg"
          title={t(LOCALE_KEYS.CLEARSTEPS_BUTTON)}
          className="bg-lightblue text-white text-sm md:text-[14px] px-4 py-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default ClearStepsLeft;
