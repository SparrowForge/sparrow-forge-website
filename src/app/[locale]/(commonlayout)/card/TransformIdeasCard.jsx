"use client";
import { TbDatabaseDollar } from "react-icons/tb";
import { FaHeartbeat, FaRocket } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa6";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { IoCart } from "react-icons/io5";
import { useTranslations } from "next-intl"; // or your localization hook
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const TransformIdeasCard = () => {
  const t = useTranslations(); // namespace TRANSFORM

  const data = [
    {
      id: 1,
      name: t(LOCALE_KEYS.FINTECH_TITLE),
      icon: <TbDatabaseDollar className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description: t(LOCALE_KEYS.FINTECH_DESC),
    },
    {
      id: 2,
      name: t(LOCALE_KEYS.HEALTHCARE_TITLE),
      icon: <FaHeartbeat className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description: t(LOCALE_KEYS.HEALTHCARE_DESC),
    },
    {
      id: 3,
      name: t(LOCALE_KEYS.AUTOMATION_TITLE),
      icon: <TbSteeringWheelFilled className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description: t(LOCALE_KEYS.AUTOMATION_DESC),
    },
    {
      id: 4,
      name: t(LOCALE_KEYS.ECOMMERCE_TITLE),
      icon: <IoCart className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description: t(LOCALE_KEYS.ECOMMERCE_DESC),
    },
    {
      id: 5,
      name: t(LOCALE_KEYS.LMS_TITLE),
      icon: <FaSatelliteDish className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description: t(LOCALE_KEYS.LMS_DESC),
    },
    {
      id: 6,
      name: t(LOCALE_KEYS.STARTUP_TITLE),
      icon: <FaRocket className="w-10 h-10 text-lightblue group-hover:text-white transition " />,
      description: t(LOCALE_KEYS.STARTUP_DESC),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="group p-8 flex flex-col gap-4 rounded-2xl shadow-xl bg-white hover:bg-deepblue duration-300 transition"
        >
          <div className="flex items-center justify-start ">
            <div className="bg-lightblue/20 rounded-full p-4">
              {item.icon}
            </div>
          </div>
          <h3 className="text-lg md:text-2xl font-semibold text-black group-hover:text-white transition">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-white transition">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransformIdeasCard;
