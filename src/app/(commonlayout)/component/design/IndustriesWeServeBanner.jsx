import React from 'react';
import Button from '../shared/Button';

const IndustriesWeServeBanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='w-full md:w-2/4'>
                <h1 className='text-[32px] md:text-[56px] font-bold'>Industries We Serve</h1>
                <p className='text-[20px]'>We have worked across multiple industry verticals over the years and helped businesses in diverse domains. We have served a wide range of industries like and many more.</p>
            </div>
             <div className='border border-orange p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px] mt-4'>
                <Button
                    image="/bannerImg/arrowRightUp.svg"
                    title="Get Started"
                    className="bg-orange text-white text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full " />
            </div>

        </div>
    );
};

export default IndustriesWeServeBanner;