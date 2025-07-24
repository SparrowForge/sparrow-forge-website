"use client"
import Button from '../shared/Button';
import ButtonTitle from '../shared/ButtonTitle';
import Title from '../shared/Title';

const OurProjectBanner = () => {
    return (
        <div className='mx-2 md:mx-10 md:py-10 '>
            <ButtonTitle title="Real Stories 🖼️" />
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='w-full md:w-2/4'>
                    <Title
                        title="Our Project Highlights"
                        subtitle="Each project highlights our collaborative approach and creative problem-solving. Our case studies show how we transform ideas into effective, scalable solutions."
                        className="flex flex-col justify-center items-start gap-4 md:my-8"
                    />

                 
                </div>
                <div className='border border-lightblue p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px] mt-4'>
                    <Button
                        image="/bannerImg/arrowRightUp.svg"
                        title="View All Projects"
                        className="bg-lightblue text-white text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full " />
                </div>

            </div>
        </div>
    );
};

export default OurProjectBanner;