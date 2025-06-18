import React from 'react';

const stats = [
    {
        value: '100%',
        title: 'Client Satisfaction',
        description:
            "We focus on understanding your business needs and crafting solutions that match your goals. With our experience, we also provide expert suggestions to improve functionality, ensuring your software supports growth, efficiency, and long-term success.",
    },
    {
        value: '15+',
        title: 'Projects Successfully Delivered',
        description:
            'We have successfully delivered a wide range of custom software and mobile applications across various industries. Each project is built with precision, aligning with client objectives to ensure smooth functionality, modern design, and meaningful impact on business growth and efficiency.',
    },
    {
        value: '20+',
        title: 'Years of Technical Excellence',
        description:
            'Our team brings over two decades of combined expertise across software development, UI/UX design, and system architecture. This deep experience allows us to solve complex challenges efficiently and deliver reliable, high-quality solutions tailored to your business needs.',
    },
];

const AboutCard = () => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`bg-gray rounded-xl p-8 text-center shadow-sm ${
                            index === 1 ? 'md:mt-20' : 'md:mb-20'
                        }`}
                    >
                        <div className="my-10">
                            <h2 className="text-[72px] font-semibold mb-2">{stat.value}</h2>
                            <h3 className="uppercase font-semibold text-[16px] tracking-wider text-gray-700">
                                {stat.title}
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutCard;
