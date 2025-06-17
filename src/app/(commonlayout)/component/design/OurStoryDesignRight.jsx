import React from 'react';
import Title from '../shared/Title';
import Image from 'next/image';

const OurStoryDesignRight = () => {
    return (
        <div className='flex flex-col items-start justify-between py-4 md:px-10 space-y-4 md:space-y-48 2xl:space-y-96'>
            
            <div className='flex justify-center'>
                <Title
                    title="Our Story, Your Solution"
                    subtitle="Our story is all about building meaningful solutions that help businesses thrive. At Sparrow Forge Ltd., we combine creativity, technology, and a personal touch to deliver digital products that truly fit your goals and make a lasting impact."
                />
            </div>

            {/* Right Side */}
            <div className='flex flex-col md:flex-row justify-between  gap-6 '>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <div className='bg-orange rounded-[24px]'>
                        <Image
                            src="/story/1.svg"
                            width={100}
                            height={100}
                            alt='image'
                            className='w-auto h-auto p-4'
                        />
                    </div>
                    <p className='text-[14px]'>
                        We blend creativity, technical expertise, and marketing insight to craft solutions that are both beautiful and functional.
                    </p>
                </div>

                <div className='flex flex-col justify-between items-start'>
                    <div className='bg-green rounded-[24px]'>
                        <Image
                            src="/story/2.svg"
                            width={100}
                            height={100}
                            alt='image'
                            className='w-auto h-auto p-4'
                        />
                    </div>
                    <p className='text-[14px]'>
                        We prioritize data analysis and take a well-rounded view to ensure every decision is backed by strategy and insight.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurStoryDesignRight;
