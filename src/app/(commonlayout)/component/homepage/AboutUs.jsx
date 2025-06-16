import React from 'react';
import AboutCard from '../card/AboutCard';
import ButtonTitle from '../shared/ButtonTitle';

const AboutUs = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10 py-10 md:py-20'>
            <ButtonTitle title="About us 👋" />
            <h1 className='text-[16px] md:text-[40px] text-center md:mx-20'>Sparrow Forge Ltd. is a skilled software development team specializing in custom websites, <span className='opacity-40'>web applications, and mobile apps. We focus on performance, modern design, and tailored solutions that help businesses grow.</span></h1>

            <AboutCard/>
        </div>
    );
};

export default AboutUs;