"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../shared/Button";


const caseStudies = [
    {
        id: 1,
        button1: "UX/UI",
        button2: "Mobile App",
        title: "UX/UI Mobile Application Design for a Social Network",
        description:
            "Discover the essence of simplicity with Makko — the social network that prioritizes your content.",
        description1:
            "Our seamless onboarding lets you curate your interests for a uniquely tailored feed. Customize notifications to stay connected.",
        image: "/newDesign/caseStudies/1.svg",
    },
    {
        id: 2,
        button1: "Web Platform",
        button2: "E-Commerce",
        title: "E-Commerce Website Redesign for Fashion Brand",
        description:
            "Boosted conversions by 40% with a modern, user-friendly shopping experience.",
        description1:
            "Implemented streamlined checkout, personalized recommendations, and mobile-first design for improved customer engagement.",
        image: "/newDesign/caseStudies/2.png",
    },
    {
        id: 3,
        button1: "Web Platform",
        button2: "Healthcare",
        title: "Healthcare App Development",
        description:
            "Created a seamless telemedicine experience for patients and doctors.",
        description1:
            "Features include video consultations, prescription management, and secure health data storage.",
        image: "/newDesign/caseStudies/3.png",
    },
     {
        id: 4,
        button1: "Mobile App",
        button2: "Web Platform",
        title: "Online Learning Platform",
        description:
            "Developed a scalable learning platform for schools and universities.",
        description1:
            "Interactive video lectures, student progress tracking, and gamified assessments improved engagement by 60%.",
        image: "/newDesign/caseStudies/4.png",
    },
    // {
    //     id: 5,
    //     button1: "Branding",
    //     button2: "Marketing",
    //     title: "Brand Identity Design for a Tech Startup",
    //     description:
    //         "Crafted a fresh visual identity and marketing assets for a growing SaaS company.",
    //     description1:
    //         "Unified design system across web, mobile, and print boosted brand recognition and investor confidence.",
    //     image: "/newDesign/caseStudies/5.svg",
    // },
];


export default function CaseStudiesSlider() {
    return (
        <Swiper
            loop
            spaceBetween={30}
            slidesPerView={1}
            className="w-full"
            modules={[Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {caseStudies.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="grid md:grid-cols-2 items-center gap-4  ">
                        <img src={item.image || "/newDesign/caseStudies/1.svg"} alt={item.title} className="rounded-lg" />
                        <div className="">
                            <div className="inline-flex items-center gap-2 py-1 px-2 rounded-full bg-gray text-[14px] w-fit mb-6">
                                <div className="bg-gray-300 py-1 px-2 rounded-full">
                                    {item.button1}
                                </div>
                                <span>{item.button2}</span>
                            </div>

                            <h3 className="text-xl md:text-[32px] font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description} <br /> <br />{item.description1} </p>
                            <Button
                                image="/bannerImg/arrowRightUpWhite.svg"
                                title="View Case Study"
                                className="bg-lightblue text-white text-sm md:text-[14px] px-4 py-2 rounded-full " />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
