"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Title from "../../shared/Title";
import { useLocalization } from "@/hooks/useLocalization";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const FrequentlyAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const {t} = useLocalization();

    const faqItems = [
        {
            q: LOCALE_KEYS.FAQ.ITEMS.Q1,
            a: LOCALE_KEYS.FAQ.ITEMS.A1,
        },
        {
            q: LOCALE_KEYS.FAQ.ITEMS.Q2,
            a: LOCALE_KEYS.FAQ.ITEMS.A2,
        },
        {
            q: LOCALE_KEYS.FAQ.ITEMS.Q3,
            a: LOCALE_KEYS.FAQ.ITEMS.A3,
        },
        {
            q: LOCALE_KEYS.FAQ.ITEMS.Q4,
            a: LOCALE_KEYS.FAQ.ITEMS.A4,
        },
        {
            q: LOCALE_KEYS.FAQ.ITEMS.Q5,
            a: LOCALE_KEYS.FAQ.ITEMS.A5,
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="p-10 my-10">
            <Title
                title={t(LOCALE_KEYS.FAQ.TITLE)}
                subtitle={t(LOCALE_KEYS.FAQ.SUBTITLE)}
                className="flex flex-col justify-center items-center gap-4 my-4 lg:mx-64 text-center pb-10"
            />

            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`max-w-3xl mx-auto mb-4 rounded-2xl overflow-hidden transition duration-300 ${activeIndex === index ? "bg-lightblue text-white" : "bg-gray-100"
                        }`}
                >
                    <div
                        className="flex justify-between items-center p-5 cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3
                            className={`text-[24px] font-semibold ${activeIndex === index ? "text-white" : "text-black"
                                }`}
                        >
                            {t(item.q)}
                        </h3>
                        {activeIndex === index ? (
                            <FaMinus className=" bg-white text-lightblue rounded-full w-6 h-6 p-2" />
                        ) : (
                            <FaPlus className="text-white bg-lightblue rounded-full w-6 h-6 p-2" />
                        )}
                    </div>

                    {activeIndex === index && (
                        <div className="px-5 pb-5 text-[16px] text-white">
                            {t(item.a)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FrequentlyAQ;
