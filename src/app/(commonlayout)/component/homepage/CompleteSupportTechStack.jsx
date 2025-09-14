"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const data = [
    { id: 1, image: "/newDesign/CompleteSupportTechStack/1.svg" },
    { id: 2, image: "/newDesign/CompleteSupportTechStack/2.svg" },
    { id: 3, image: "/newDesign/CompleteSupportTechStack/3.svg" },
    { id: 4, image: "/newDesign/CompleteSupportTechStack/4.svg" },
    { id: 5, image: "/newDesign/CompleteSupportTechStack/5.svg" },
    { id: 6, image: "/newDesign/CompleteSupportTechStack/6.svg" },
    { id: 7, image: "/newDesign/CompleteSupportTechStack/7.svg" },
    { id: 8, image: "/newDesign/CompleteSupportTechStack/8.svg" },
    { id: 9, image: "/newDesign/CompleteSupportTechStack/9.svg" },
    { id: 10, image: "/newDesign/CompleteSupportTechStack/10.svg" },
];

const CompleteSupportTechStack = () => {
    return (
        <div className="w-full md:w-[1194px] mx-auto my-10 md:my-20  flex flex-col gap-10">
            <h1 className="text-center text-2xl md:text-[48px]  font-bold md:my-10">
                Complete Support for Your <br /> Entire Tech Stack
            </h1>

            <div className="md:mx-20 flex flex-col gap-2 md:gap-10 opacity-70">
                {/* First Marquee → sorted 1 → 10 */}
                <Marquee pauseOnHover speed={80} gradient={false}>
                    {data
                        .sort((a, b) => a.id - b.id) // ascending 1 → 10
                        .map((item) => (
                            <div key={item.id} className="mx-8 flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={`Tech logo ${item.id}`}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                </Marquee>

                {/* Second Marquee → sorted 10 → 1 */}
                <Marquee pauseOnHover speed={80} gradient={false} direction="right">
                    {data
                        .sort((a, b) => b.id - a.id) // descending 10 → 1
                        .map((item) => (
                            <div key={item.id} className="mx-8 flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={`Tech logo ${item.id}`}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                </Marquee>
            </div>
        </div>
    );
};

export default CompleteSupportTechStack;
