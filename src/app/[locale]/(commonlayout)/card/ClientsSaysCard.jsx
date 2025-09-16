'use client'
import React from "react";
import { Star } from "lucide-react";
import { LOCALE_KEYS } from "@/constants/localizationKeys";
import { useTranslations } from "next-intl";

const ClientsSaysCard = ({ item }) => {
  const t = useTranslations();
  const plural = item.rating > 1 ? "s" : "";
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-[260px]">
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>

      {/* Number */}
      <div className="flex items-center ">
        <p className="text-[18px] text-gray-300 font-semibold border-t p-2 rounded-full">{item.number}</p>
        <div className="flex-1 h-0.5 bg-gray rounded-full"></div>
      </div>



      {/* Feedback */}
      <p className="text-gray-600 text-sm mb-4">{item.feedback}</p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
          />
        ))}
        <span className="text-sm text-gray-500"> {t(LOCALE_KEYS.RATING_STAR, {
          count: item.rating,
          plural: plural
        })}</span>
      </div>
    </div>
  );
};

export default ClientsSaysCard;
