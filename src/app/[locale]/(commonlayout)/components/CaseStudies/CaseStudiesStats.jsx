'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { LOCALE_KEYS } from '@/constants/localizationKeys'

const CaseStudiesStats = () => {
  const t = useTranslations()

  const stats = [
    {
      value: '95%',
      label: t(LOCALE_KEYS.CASE_STATS_CLIENT_SATISFACTION),
      description: t(LOCALE_KEYS.CASE_STATS_CLIENT_SATISFACTION_DESCRIPTION),
    },
    {
      value: '100%',
      label: t(LOCALE_KEYS.CASE_STATS_ROI),
      description: t(LOCALE_KEYS.CASE_STATS_ROI_DESCRIPTION),
    },
    {
      value: '97%',
      label: t(LOCALE_KEYS.CASE_STATS_DELIVERY),
      description: t(LOCALE_KEYS.CASE_STATS_DELIVERY_DESCRIPTION),
    },
  ]

  return (
    <div className='grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 mt-8 bg-lightblue/10 p-6 rounded-lg text-start w-full'>
      {stats.map((stat, idx) => (
        <div key={idx} className='pl-12 py-2'>
          <h3 className='text-2xl md:text-[30px] lg:text-[62px] font-semibold text-lightblue'>
            {stat.value}
          </h3>
          <p className='text-lightblue text-sm md:text-[18px] font-bold'>/{stat.label}</p>
          <p className='text-lightblue text-sm md:text-[16px] my-2'>
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CaseStudiesStats
