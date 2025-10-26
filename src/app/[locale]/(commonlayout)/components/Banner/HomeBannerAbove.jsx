'use client'
import Image from 'next/image'
import ButtonTitle from '../../shared/ButtonTitle'
import Button from '../../shared/Button'
import { LOCALE_KEYS } from '@/constants/localizationKeys'
import { useLocalization } from '@/hooks/useLocalization'

const HomeBannerAbove = () => {
  const { t } = useLocalization()

  return (
    <div className='flex flex-col justify-start items-start py-6 sm:py-8 md:py-10 px-4 md:px-0 gap-3 md:gap-4 w-full md:max-w-[500px]'>
      {/* Achievements Banner */}
      <div className='flex justify-center items-center gap-0 md:gap-2 py-1 px-1 md:px-3 bg-gray/5 text-white rounded-full mb-4 md:mb-0 text-[10px] md:text-[16px]'>
        <ButtonTitle title={t(LOCALE_KEYS.ACHIEVEMENTS)} />
        <p>{t(LOCALE_KEYS.ACHIEVEMENTS_DESC)}</p>
        <Image
          src='/bannerImg/arrowRightUpWhite.svg'
          alt='arrow'
          width={40}
          height={40}
          className='w-auto h-auto'
        />
      </div>

      <div className='hidden md:flex flex-col'>
        {/* Main Heading */}
        <h1 className='text-2xl sm:text-[40px] lg:text-[60px] text-white font-bold leading-snug text-start'>
          {t(LOCALE_KEYS.BUILD_YOUR)} <br />
          <span className='text-yellow-500'>
            {t(LOCALE_KEYS.DREAM_PRODUCT)}
          </span>{' '}
          <br />
          {t(LOCALE_KEYS.FASTER_DELIVERY)}
        </h1>

        {/* Description */}
        <p className='text-sm sm:text-base lg:text-[20px] text-gray/40 font-medium text-justify'>
          {t(LOCALE_KEYS.BANNER_DESCRIPTION)}
        </p>
      </div>
      {/* mobile view */}
      <div className=' flex md:hidden flex-col mb-5 gap-2'>
        {/* Main Heading */}
        <h1 className='text-2xl md:text-[20px] lg:text-[60px] text-white font-bold text-start'>
          {t(LOCALE_KEYS.BUILD_YOUR)}{' '}
          <span className='text-yellow-500'>
            {t(LOCALE_KEYS.DREAM_PRODUCT)}
          </span>{' '}
          {t(LOCALE_KEYS.FASTER_DELIVERY)}
        </h1>

        {/* Description */}
        <p className='text-[12px] md:text-[20px] text-gray/40 font-[500px] text-start'>
          {t(LOCALE_KEYS.BANNER_DESCRIPTION)}
        </p>
      </div>

      {/* CTA Button */}
      <Button
        image='/bannerImg/arrowRightUpWhite.svg'
        title={t(LOCALE_KEYS.LETS_GET_STARTED)}
        className='bg-lightblue text-white text-sm lg:text-[20px] px-4 lg:px-6 py-2 md:py-3 rounded-full '
      />
    </div>
  )
}

export default HomeBannerAbove
