"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Title from "../shared/Title";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, digital marketing, and cloud solutions."
  },
  {
    question: "How do I get started with a project?",
    answer: "Getting started with us is simple and seamless. You can reach out through our contact page, email us directly, or even schedule a free consultation. Once we hear from you, we’ll arrange a discovery call where we’ll take time to understand your goals, challenges, target audience, and technical needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline depends on the scope and complexity of the project. Typically, small projects can take 4-6 weeks, while larger ones may take several months."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with a diverse range of industries including healthcare, finance, e-commerce, education, and technology."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer post-launch support and maintenance to ensure your product remains updated, secure, and fully functional."
  }
];

const FrequentlyAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" p-10 my-10">
           <Title title="Frequently Asked Questions" subtitle=" We understand that starting a new project can bring up a lot of questions — and we’re here to help." 
            className="flex flex-col justify-center items-center gap-4 my-4 md:mx-64 text-center pb-10"
            />
      

      {faqData.map((item, index) => (
        <div
          key={index}
          className={`max-w-3xl mx-auto mb-4 rounded-2xl overflow-hidden transition duration-300 ${
            activeIndex === index ? "bg-orange text-white" : "bg-gray-100"
          }`}
        >
          <div
            className="flex justify-between items-center px-5 pt-5 pb-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className={`text-[24px] font-semibold ${activeIndex === index ? "text-white" : "text-black"}`}>
              {item.question}
            </h3>
            {activeIndex === index ? (
              <FaMinus className=" bg-white text-orange rounded-full w-6 h-6 p-2" />
            ) : (
              <FaPlus className="text-white bg-orange rounded-full w-6 h-6 p-2" />
            )}
          </div>

          {activeIndex === index && (
            <div className="px-5 pb-5 text-[16px] text-white">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAQ;
