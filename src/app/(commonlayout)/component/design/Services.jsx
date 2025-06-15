import React from 'react';
import SharedCard from '../card/SharedCard';
const data = [
    {
        id: 1,
        heading: "Web Design & Development",
        description: "We focus on user-centered interface and experience design tailored for web, mobile, and SaaS applications. Our goal is to create intuitive, engaging, and visually appealing designs that not only look great but also make your product easy and enjoyable to use.",
        date: "Learn More",
        image: "/services/1.svg",
    },
    {
        id: 2,
        heading: "UI/UX Design",
        description: "We focus on user-centered interface and experience design tailored for web, mobile, and SaaS applications. Our goal is to create intuitive, engaging, and visually appealing designs that not only look great but also make your product easy and enjoyable to use.",
        date: "Learn More",
        image: "/services/2.svg",
    },
    {
        id: 3,
        heading: "IT Consulting & Support",
        description: "We focus on user-centered interface and experience design tailored for web, mobile, and SaaS applications. Our goal is to create intuitive, engaging, and visually appealing designs that not only look great but also make your product easy and enjoyable to use.",
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