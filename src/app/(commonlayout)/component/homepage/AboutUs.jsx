import React from 'react';
import AboutCard from '../card/AboutCard';

const AboutUs = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10 py-10 md:py-20'>
            <button className='bg-gray rounded-full px-3 py-1'>About us 👋</button>
            <h1 className='text-[40px] text-center mx-20'>Sparrow Forge Ltd. is a skilled software development team specializing in custom websites, <span className='opacity-40'>web applications, and mobile apps. We focus on performance, modern design, and tailored solutions that help businesses grow.</span></h1>

            <AboutCard/>
        </div>
    );
};

export default AboutUs;