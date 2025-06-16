import Image from 'next/image';
import React from 'react';

const InnovationCard = ({
  image,
  heading,
  date,
  imageClassName = '',
  headingClassName = '',
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className={`relative w-full h-40 ${imageClassName}`}>
        <Image
          src={image}
          alt="card image"
          fill
          className={`object-cover rounded-[40px]`}
        />
      </div>

      <div>
        <h3 className={`font-semibold mb-2 ${headingClassName}`}>{heading}</h3>
        <div className="flex items-center justify-between text-sm">
          <span>{date}</span>
          <Image
            src="/bannerImg/arrowRightDown.svg"
            alt="arrow icon"
            width={20}
            height={20}
            className="ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default InnovationCard;
