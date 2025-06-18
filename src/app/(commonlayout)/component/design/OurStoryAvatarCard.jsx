import React from 'react';
import AvatarGroup from './AvatarGroup';
import Image from 'next/image';

const OurStoryAvatarCard = () => {
    return (
        <div className='bg-white rounded-[38px] flex flex-col justify-between items-start p-8'>
            <h1 className='text-[18px] font-bold text-green'>Meet the Minds Behind the Magic A Team of Thinkers, Makers, and Problem-Solver.</h1>

            <Image
                src="/story/Line1.svg"
                width={30}
                height={40}
                alt='image'
                className='hidden md:flex w-auto h-auto mr-4' />
            <AvatarGroup />
        </div>
    );
};

export default OurStoryAvatarCard;