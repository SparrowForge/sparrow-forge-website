"use client";
import React from 'react';
import Title from '../../shared/Title';
import Button from '../../shared/Button';
import { LOCALE_KEYS } from '@/constants/localizationKeys';
import { useTranslations } from 'next-intl';

const ClientsSaysHeader = () => {
  const t = useTranslations();

  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
      <div className='w-full md:w-2/4 text-deepblue'>
        <Title
          title={t(LOCALE_KEYS.CLIENTS.HEADER_TITLE)}
          subtitle={t(LOCALE_KEYS.CLIENTS.HEADER_SUBTITLE)}
          className="flex flex-col justify-center items-start gap-4 md:my-16"
        />
      </div>
      <Button
        image="/bannerImg/arrowRightUp.svg"
        title={t(LOCALE_KEYS.CLIENTS.VIEW_ALL)}
        className="bg-lightblue/10 text-lightblue text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full animation-zoom-out-hover"
      />
    </div>
  );
};

export default ClientsSaysHeader;
