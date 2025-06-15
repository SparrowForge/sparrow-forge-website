import Image from 'next/image';
import React from 'react';

const SharedCard = ({ image, heading, description, date }) => {
  return (
    <div className='bg-gray rounded-2xl p-4 shadow-md'>
      <div className='bg-white rounded-2xl p-4 flex flex-col gap-4'>
      
        <Image
          src={image}
          alt='card image'
          width={300}
          height={100}
          className='rounded-xl object-cover'
        />

        <div>
          <h3 className='text-lg font-semibold mb-2'>{heading}</h3>
          <p className=' text-sm mb-4'>{description}</p>

          <div className='flex items-center justify-between text-sm '>
            <span>{date}</span>
            
              <Image
                src="/bannerImg/arrowRightDown.svg"
                alt='arrow icon'
                width={20}
                height={20}
                className='ml-2'
              />
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedCard;
