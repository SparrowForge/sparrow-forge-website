import React from 'react';
import SharedCard from '../card/SharedCard';
const data = [
    {
        id: 1,
        heading: "Cloud & Web Solution",
        description: "We design scalable, secure cloud and web solutions tailored to your business needs. From SaaS platforms to enterprise portals, we deliver performance-driven systems optimized for growth.",
        date: "Learn More",
        image: "/services/1.svg",
    },
    {
        id: 2,
        heading: "Mobile & Desktop Application",
        description: "We develop high-performance mobile and desktop applications with intuitive interfaces and robust functionality. Our solutions run seamlessly across platforms to enhance user engagement and productivity.",
        date: "Learn More",
        image: "/services/2.svg",
    },
    {
        id: 3,
        heading: "IT Consulting & Support",
        description: "We provide strategic IT consulting and end-to-end technical support to help businesses streamline operations, reduce risk, and drive innovation through technology.",
        date: "Learn More",
        image: "/services/3.svg",
    }
];
const Services = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {data.map((item) => (
                <SharedCard
                    key={item.id}
                    image={item.image}
                    heading={item.heading}
                    headingClassName="text-[20px]"
                    description={item.description}
                    date={item.date}
                    imageClassName="h-48  w-full"
                />
            ))}
        </div>
    );
};

export default Services;