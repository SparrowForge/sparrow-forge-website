import React from 'react';
import Title from '../shared/Title';
import Button from '../shared/Button';

const ClientsSaysHeader = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-4'>
            <div className='w-full md:w-2/4 text-deepblue'>
                <Title
                    title="What our clients say"
                    subtitle="Lasting climate solutions need lasting partnerships. We’re here for the long run—growing trust, and sharing purpose."
                    className="flex flex-col justify-center items-start gap-4 md:my-16"
                />


            </div>
            <Button
                image="/bannerImg/arrowRightUp.svg"
                title="View all"
                className="bg-lightblue/10 text-lightblue text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full animation-zoom-out-hover" />
        </div>
    );
};

export default ClientsSaysHeader;