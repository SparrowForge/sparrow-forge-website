"use client";

import React from "react";
import Image from "next/image";

const ClearStepsCard = ({ step, title, icon, des1, des2, des3 }) => (
  <div className="bg-white shadow-md rounded-xl p-6 w-[320px] md:w-[450px] flex flex-col gap-4">
    {/* Step + Icon */}
    <div className="flex items-center justify-between gap-3">
      <div className="bg-lightblue/20 rounded-full p-3">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="bg-lightblue/20 rounded-full px-3 py-2">
        <span className="text-sm font-semibold text-lightblue">{step}</span>
      </div>
    </div>

    <hr className="h-1 text-gray" />

    {/* Title */}
    <h3 className="font-semibold text-lg text-deepblue">{title}</h3>

    {/* Descriptions */}
    <ul className="list-disc list-inside text-deepblue text-sm leading-relaxed space-y-1">
      <li>{des1}</li>
      <li>{des2}</li>
      <li>{des3}</li>
    </ul>
  </div>
);

export default ClearStepsCard;
