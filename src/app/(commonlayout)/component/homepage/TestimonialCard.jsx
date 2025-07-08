import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="relative flex justify-center items-center w-full py-12 bg-white">
      <div className="w-2/3 relative bg-[#f5f5f5] rounded-3xl flex flex-col md:flex-row items-start justify-between max-w-5xl px-6 md:px-10 py-10 overflow-hidden">

        {/* Text Section */}
        <div className="flex-1 pr-0 md:pr-8 z-10">
          <div className="text-4xl text-lightblue-500 mb-4">❝</div>
          <p className="text-[#0f172a] text-lg md:text-xl font-medium leading-relaxed mb-6">
            From design to development, Sparrow Forge exceeded our expectations.
            Communication was clear, and the results were outstanding. We've seen a
            real impact on our business.
          </p>

          {/* Name & Rating */}
          <div className="flex items-center mb-1">
            <span className="font-semibold text-[#0f172a] mr-2">Emily Chen</span>
            <div className="flex text-blue-500 text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(4.8/5)</span>
          </div>

          {/* Role */}
          <div className="text-sm text-gray-600 italic">
            Product Manager at BrightApps
          </div>
        </div>

        {/* Image Section */}
       
      </div>
       <div className="w-1/3 absolute right-32 bottom-12 z-50">
          <Image
            src="/slideImages/image 25.svg"
            alt="Emily Chen"
            width={300}
            height={300}
            className="rounded-xl object-cover md:-mt-12"
          />
        </div>
    </div>
  );
};

export default TestimonialCard;
