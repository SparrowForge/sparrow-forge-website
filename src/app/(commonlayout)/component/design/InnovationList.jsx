"use client"

import InnovationCard from "../card/InnovationCard";

const data = [
  {
    id: 1,
    heading: "Why Custom Software is the Smartest Investment for Growing Businesses",
    date: "31 May 2025",
    image: "/innovation/1.svg",
  },
  {
    id: 2,
    heading: "The Future of Mobile Apps",
    date: "31 May 2025",
    image: "/innovation/2.svg",
  },
  {
    id: 3,
    heading: "5 Signs It's Time to Upgrade Your Website",
    date: "01 Jun 2025",
    image: "/innovation/3.svg",
  },
];

const InnovationList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 md:p-4 mt-10">
      {data.map((item) => (
        <InnovationCard
          key={item.id}
          image={item.image}
          heading={item.heading}
          date={item.date}
          imageClassName="h-56 "
          headingClassName="text-lg"
        />
      ))}
    </div>
  );
};

export default InnovationList;
