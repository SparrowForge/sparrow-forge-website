import React from 'react';

const stats = [
    {
        value: '98%',
        title: 'Client Satisfaction',
        description:
            "Our clients’ satisfaction is our top priority, and we’re proud to have achieved a 98% satisfaction rate by consistently delivering quality results and attentive service.",
    },
    {
        value: '250+',
        title: 'Completed Projects',
        description:
            'Sparrow Forge Ltd. delivers reliable, high-quality digital solutions tailored to your needs—helping your business grow with confidence.',
    },
    {
        value: '10+',
        title: 'Years of Experience',
        description:
            'We specialize in delivering custom digital solutions that blend modern design, seamless functionality, and reliable performance—helping businesses thrive in the digital world.',
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
                            <h3 className="uppercase font-semibold text-sm tracking-wider text-gray-700">
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
