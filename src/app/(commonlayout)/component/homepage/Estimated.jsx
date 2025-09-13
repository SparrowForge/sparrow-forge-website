"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../shared/Button";

const Estimated = () => {
    const [activeTab, setActiveTab] = useState("about"); // ✅ removed TS type

    const content = {
        about: {
            title: (
                <>
                    Established in <span className="text-yellow-400">2012</span> driving
                    digital growth globally.
                </>
            ),
            description:
                "We deliver innovative digital solutions that drive growth and transformation across industries, combining global expertise with a commitment to measurable results.",
            stats: [
                { value: "250+", label: "Successfully delivered projects" },
                { value: "15+", label: "With over 15 years of experience" },
            ],
            image: "/newDesign/team/team.svg",
        },
        who: {
            title: (
                <>
                    We are a <span className="text-yellow-400">global team</span> driving
                    innovation everywhere.
                </>
            ),
            description:
                "Our mission is to partner with startups and enterprises to co-create digital solutions, leveraging design thinking and modern technology to deliver impactful experiences.",
            stats: [
                { value: "50+", label: "Talented professionals" },
                { value: "10+", label: "Industries served worldwide" },
            ],
            image: "/newDesign/team/3.jpg",
        },
    };

    const current = content[activeTab];

    return (
        <div className="w-full bg-deepblue text-white  p-10 md:p-16 ">
            <div className="md:w-[1194px] mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Left Content */}
                <div className="w-1/2 space-y-6">
                    {/* Tabs */}
                    <div className="flex gap-3 ">
                        <div className="rounded-full justify-start items-start bg-lightblue/10 p-2">
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`px-4 py-1 rounded-full text-sm transition ${activeTab === "about"
                                    ? "bg-white text-deepblue font-semibold"
                                    : ""
                                    }`}
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => setActiveTab("who")}
                                className={`px-4 py-1 rounded-full text-sm transition ${activeTab === "who"
                                    ? "bg-white text-deepblue font-semibold"
                                    : ""
                                    }`}
                            >
                                Who We Are
                            </button>
                        </div>

                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-4xl font-bold leading-snug">
                        {current.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300">{current.description}</p>

                    {/* CTA */}
                    <Button
                        image="/bannerImg/arrowRightUpWhite.svg"
                        title="About Us"
                        className="bg-lightblue text-white text-sm md:text-[14px] px-4 py-2 rounded-full " />

                </div>

                {/* Right Content */}
                <div className="w-1/2 relative flex justify-center">
                    <Image
                        src={current.image}
                        alt="Team"
                        width={400}
                        height={300}
                        className="rounded-xl object-cover"
                    />

                    {/* Stats */}
                    <div className="absolute bottom-4 left-4 bg-gray-600 px-6 py-4 rounded-xl text-sm shadow-md w-40">
                        <p className="text-3xl font-bold">{current.stats[0].value}</p>
                        <p className="text-gray-300">{current.stats[0].label}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-gray-600 px-5 py-4 rounded-xl text-xs shadow-md w-40">
                        <p className="text-3xl font-bold">{current.stats[1].value}</p>
                        <p className="text-gray-300">{current.stats[1].label}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estimated;
