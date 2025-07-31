import React from 'react';
import BannerCard from '../card/BannerCard';
import Image from 'next/image';
import HomeBannerAbove from '../design/HomeBannerAbove';

const MainBanner = () => {
    return (
        <div id="home" className='flex justify-between items-center gap-0 bg-gray py-0 pb-4 md:py-8 md:rounded-4xl mx-0 2xl:mx-4'>

            <Image
                src="/leftBanner.svg"
                width={30}
                height={40}
                alt='image'
                className='hidden md:flex w-auto h-auto' />

            <div>
                <HomeBannerAbove />
                <BannerCard />
            </div>


            <Image
                src="/rightBanner.svg"
                width={30}
                height={40}
                alt='image'
                className='hidden md:flex w-auto h-auto' />

        </div>
    );
};

export default MainBanner;