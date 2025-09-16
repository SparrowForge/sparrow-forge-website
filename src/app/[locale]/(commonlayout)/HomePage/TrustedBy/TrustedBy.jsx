"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { useLocalization } from "@/hooks/useLocalization";
import { LOCALE_KEYS } from "@/constants/localizationKeys";

const data = [
    { id: 1, name: "BAC (British American College)", image: "/Client_List/bacbd-logo.png", href: "https://www.bacbd.org" },
    { id: 2, name: "Event World BD", image: "/Client_List/eventworldbd.png", href: "https://eventworldbd.com" },
    { id: 3, name: "Holy Seed Agro", image: "/Client_List/holyseedagro.png", href: "https://www.holyseedagroltd.com/" },
    { id: 4, name: "Cryto Wallet", image: "", href: "https://vtroncard.com" },
    { id: 5, name: "CLAR", image: "/Client_List/CLAR.png", href: "https://clar.pt" },
    { id: 6, name: "Cryto Bank", image: "/Client_List/cryptobanx.png", href: "https://www.holyseedagroltd.com/" },
    { id: 7, name: "Blue Atlanticl", image: "/Client_List/blueatlanticl.png", href: "https://www.blueatlanticltd.com" },
    { id: 8, name: "Solo Clash", image: "/Client_List/soloclash.png", href: "http://soloclash.com" },
];

const TrustedBy = () => {
    const { t } = useLocalization();
    return (
        <div className="w-full md:w-[1194px] mx-auto my-10 md:my-28 md:mx-52 flex flex-col ">
            <h1 className="text-center text-2xl md:text-[48px]  font-bold my-10 text-deepblue">{t(LOCALE_KEYS.TRUSTED_BY)}</h1>
            <Marquee pauseOnHover speed={50} gradient={false}>
                {data.map((item) => (
                    <div key={item.id} className="opacity-50 hover:opacity-100" >
                        <Link href={item?.href} target="_blank" className="mx-8 flex items-center justify-center gap-2 md:gap-3">
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                    title={item.name}
                                />
                            ) : (
                                <p className="text-[20px] font-bold">{item.name}</p>
                            )

                            }
                        </Link>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TrustedBy;
