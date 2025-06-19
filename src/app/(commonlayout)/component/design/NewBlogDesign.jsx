"use client"

import Image from "next/image";
import Link from "next/link";

const data = [
    {
        id: 1,
        heading: "40 Must Read Engineering Blogs to Learn System Design and Software Architecture in 2025",
        description: "Master System design and Software architecture by reading engineering blogs from top tech companies.",
        date: "June 29, 2024",
        link: "https://medium.com/javarevisited/40-must-read-engineering-blogs-to-learn-system-design-and-software-architecture-in-2024-aaa7c4f71ee6",
        image: "/blog/1.png",
    },
    {
        id: 2,
        heading: "Top 10 AI Blogs Covering Trends and Breakthroughs",
        description: "As artificial intelligence advances, there’s a lot of content to explore and different ways you can learn about the ....",
        date: "August 19, 2024",
        link: "https://www.digitalocean.com/resources/articles/ai-blogs",
        image: "/blog/2.png",
    },
    {
        id: 3,
        heading: "Self-Sovereign Identity on Oracle Blockchain with Privacy-Enhanced Verifiable Credentials",
        description: "B2B healthcare SaaS companies have a lot to juggle in terms of product development, sales, and customer support, and ...",
        date: "April 30, 2025",
        link: "https://blogs.oracle.com/blockchain/post/privacyenhanced-verifiable-credentials",
        image: "/blog/3.png",
    }
];

const NewBlogDesign = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {
                data.map((item) => (
                    <div key={item.id} className="relative group bg-gray p-8 rounded-[38px] flex flex-col justify-between gap-16 overflow-hidden">
                        <div className="flex flex-col ">
                            <Image
                                src={item.image}
                                alt={item.heading}
                                fill
                                className="object-cover transition duration-500 opacity-0 group-hover:opacity-100 group-hover:blur-black"
                            />
  <div className="absolute inset-0 bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-[38px]"></div>
                            <h1 className="font-semibold mb-2 text-lg">{item.heading}</h1>
                            <p className='text-sm mb-4'>{item.description.slice(0, 80)}....</p>
                        </div>

                        <div className='flex items-center justify-between text-sm '>
                            <p>{item.date}</p>
                            <Link href={item.link} target="_blank">
                                <Image
                                    src="/bannerImg/arrowRightDown.svg"
                                    alt='arrow icon'
                                    width={20}
                                    height={20}
                                    className='ml-2'
                                />
                            </Link>
                        </div>

                        {/* Read More Button on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-20">
                            <Link href={item.link} target="_blank">
                                <div className="text-white flex items-center gap-2">
                                    Read More
                                    <Image
                                        src="/bannerImg/arrowRightUp.svg"
                                        alt='arrow'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default NewBlogDesign;
