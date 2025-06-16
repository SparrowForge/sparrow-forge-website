"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const data = [
  { id: 1, name: "Capsule", image: "/trustedby/0.svg" },
  { id: 2, name: "Ploymath", image: "/trustedby/1.svg" },
  { id: 3, name: "Luminous", image: "/trustedby/2.svg" },
  { id: 4, name: "Quotient", image: "/trustedby/3.svg" },
  { id: 5, name: "Acme Corp", image: "/trustedby/4.svg" },
  { id: 6, name: "Boltshift", image: "/trustedby/5.svg" },
];

const TrustedBy = () => {
  return (
    <div className="my-10 md:my-20 md:mx-48 opacity-40 flex flex-col ">
        <h1 className="text-center text-[28px] uppercase font-bold my-10">Trusted by startups and global teams</h1>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {data.map((item) => (
          <div key={item.id} className="mx-8 flex items-center justify-center gap-2 md:gap-3">
            <Image
              src={item.image}
              alt={item.name}
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-[20px] font-bold">{item.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedBy;
