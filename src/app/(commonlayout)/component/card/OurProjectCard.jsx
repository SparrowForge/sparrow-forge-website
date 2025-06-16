"use client";

import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";
const data = [
    {
        id: 1,
        name: "Bullo",
        category: [
            { catname: "UI/UX " },
            { catname: "Website Design" }
        ],
        date: "12 Jun 2025",
        image: "/project/1.svg"
    },
    {
        id: 2,
        name: "mhattrix",
        category: [
            { catname: "UI/UX " },
            { catname: "Dashboard" }
        ],
        date: "12 Jun 2025",
        image: "/project/2.svg"
    },
    {
        id: 3,
        name: "Smart Home",
        category: [
            { catname: "UI/UX " },
            { catname: "Mobile App Design" }
        ],
        date: "12 Jun 2025",
        image: "/project/3.svg"
    },
    {
        id: 4,
        name: "Modula",
        category: [
            { catname: "Branding" },
            { catname: "Logo" }
        ],
        date: "12 Jun 2025",
        image: "/project/4.svg"
    }
];

const OurProjectCard = () => {
    return (
        <div className= "grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-gray p-4 rounded-[40px] flex flex-col gap-4 "
                >
                    <div className="relative w-full h-48 md:h-[300px]">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-[40px]"
                        />
                    </div>
                    <div className="p-4 bg-white rounded-3xl ">
                        <div className="flex items-center mb-3 opacity-50">
                            {item.category.map((cat, index) => (
                                <div className="flex justify-center items-center">
                                    <p
                                        key={index}
                                        className="text-[12px] "
                                    >
                                        {cat.catname}
                                    </p>
                                    <LuDot className="text-[28px]" />
                                </div>

                            ))}
                            <span className="text-[12px]">{item.date}</span>
                        </div>

                      



                        <div className="flex items-center justify-between text-sm ">
                              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <Image
                                src="/bannerImg/arrowRightDown.svg"
                                alt="arrow icon"
                                width={20}
                                height={20}
                                className="ml-2"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurProjectCard;
