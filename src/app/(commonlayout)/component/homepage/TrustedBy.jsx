"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

const data = [
  { id: 1, name: "BAC (British American College)", image: "/Client_List/bacbd-logo.png", href: "https://www.bacbd.org" },
  { id: 2, name: "Event World BD", image: "/Client_List/eventworldbd.png", href: "https://eventworldbd.com" },
  { id: 3, name: "Holy Seed Agro", image: "/Client_List/holyseedagro.png", href: "#" },
  { id: 4, name: "Cryto Wallet", image: "", href: "https://vtroncard.com" },
  { id: 5, name: "CLAR", image: "/Client_List/CLAR.png", href: "https://clar.pt" },
];

const TrustedBy = () => {
  return (
    <div className="w-full md:w-[1194px] mx-auto my-10 md:my-28 md:mx-52 flex flex-col ">
      <h1 className="text-center text-2xl md:text-[48px]  font-bold my-10 text-deepblue">Trusted by startups and global teams</h1>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {data.map((item) => (
          <div key={item.id} className="opacity-50">
            <Link href={item?.href} target="_blank" className="mx-8 flex items-center justify-center gap-2 md:gap-3">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              )}


              <p className="text-[20px] font-bold">{item.name}</p>
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedBy;
