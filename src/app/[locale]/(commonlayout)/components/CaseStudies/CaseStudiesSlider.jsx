"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";
import Button from "../../shared/Button";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

export default function CaseStudiesSlider() {
  const t = useTranslations();

  const caseStudies = [
    {
      id: 1,
      button1: t(LOCALE_KEYS.CASESTUDIES.BUTTON1.UXUI),
      button2: t(LOCALE_KEYS.CASESTUDIES.BUTTON2.MOBILE),
      title: t(LOCALE_KEYS.CASESTUDIES.TITLE.SOCIAL),
      description: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION.SOCIAL),
      description1: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION1.SOCIAL),
      image: "/caseStudies/1.svg",
    },
    {
      id: 2,
      button1: t(LOCALE_KEYS.CASESTUDIES.BUTTON1.WEB),
      button2: t(LOCALE_KEYS.CASESTUDIES.BUTTON2.ECOMMERCE),
      title: t(LOCALE_KEYS.CASESTUDIES.TITLE.FASHION),
      description: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION.FASHION),
      description1: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION1.FASHION),
      image: "/caseStudies/2.png",
    },
    {
      id: 3,
      button1: t(LOCALE_KEYS.CASESTUDIES.BUTTON1.WEB),
      button2: t(LOCALE_KEYS.CASESTUDIES.BUTTON2.HEALTHCARE),
      title: t(LOCALE_KEYS.CASESTUDIES.TITLE.HEALTH),
      description: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION.HEALTH),
      description1: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION1.HEALTH),
      image: "/caseStudies/3.png",
    },
    {
      id: 4,
      button1: t(LOCALE_KEYS.CASESTUDIES.BUTTON1.MOBILE),
      button2: t(LOCALE_KEYS.CASESTUDIES.BUTTON2.WEB),
      title: t(LOCALE_KEYS.CASESTUDIES.TITLE.LEARNING),
      description: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION.LEARNING),
      description1: t(LOCALE_KEYS.CASESTUDIES.DESCRIPTION1.LEARNING),
      image: "/caseStudies/4.png",
    }
  ];

  return (
    <Swiper
      loop
      spaceBetween={30}
      slidesPerView={1}
      className="w-full"
      modules={[Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {caseStudies.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="grid md:grid-cols-2 items-center gap-4 px-2 md:px-0">
            <img src={item.image} alt={item.title} className="rounded-lg" />
            <div>
              <div className="inline-flex items-center gap-2 py-1 px-2 rounded-full bg-gray text-[14px] w-fit mb-6">
                <div className="bg-gray-300 py-1 px-2 rounded-full">{item.button1}</div>
                <span>{item.button2}</span>
              </div>

              <h3 className="text-xl md:text-[32px] font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">
                {item.description} <br /> <br /> {item.description1}
              </p>
              <Button
                image="/bannerImg/arrowRightUpWhite.svg"
                title={t(LOCALE_KEYS.CASESTUDIES.VIEW)}
                className="bg-lightblue text-white text-sm md:text-[14px] px-4 py-2 rounded-full"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
