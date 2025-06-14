import React from 'react';
import Image from 'next/image';

const bannerData = [
  {
    id: 1,
    image: "/bannerImg/1.svg",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet unique business needs, ensuring efficiency, scalability, and seamless integration.",
  },
  {
    id: 2,
    image: "/bannerImg/2.svg",
    title: "Web & Mobile App Development",
    description:
      "High-performance web and mobile applications with intuitive designs, delivering exceptional user experiences across platforms.",
  },
  {
    id: 3,
    image: "/bannerImg/3.svg",
    title: "IT Consulting & Support",
    description:
      "Expert guidance on technology strategies, software architecture, and ongoing support to optimize business operations.",
  },
];

const BannerCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-0">
      {bannerData.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-2xl shadow-md text-center">
          <Image
            src={item.image}
            alt={item.title}
            width={32}
            height={32}
            className="mx-auto my-4"
          />
          <h3 className="text-[18px] font-semibold  mb-2">{item.title}</h3>
          <p className="text-[14px] text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
