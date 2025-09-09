import React from 'react';
import Button from '../shared/Button';
import Title from '../shared/Title';

const TransformIdeasHeader = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
            <div className='w-full md:w-2/4'>
                <Title
                    title="Transform Ideas with Our Core Strengths"
                    // subtitle="We have worked across multiple industry verticals over the years and helped businesses in diverse domains. We have served a wide range of industries like and many more."
                    className="flex flex-col justify-center items-start gap-4 md:my-16"
                />


            </div>
            <Button
                image="/bannerImg/arrowRightUp.svg"
                title="Let's Talk"
                className="bg-lightblue/10 text-lightblue text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full animation-zoom-out-hover" />
        </div>


    );
};

export default TransformIdeasHeader;