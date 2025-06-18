import React from 'react';
import AboutCard from '../card/AboutCard';
import ButtonTitle from '../shared/ButtonTitle';

const AboutUs = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10 py-10 md:py-20'>
            <ButtonTitle title="About us 👋" />
            <h1 className='text-[16px] md:text-[40px] text-center md:mx-44'>Sparrow Forge Ltd. (SFL) is a software development company that <span className='opacity-40'> builds enterprise solutions and mobile apps, offering expert consultancy to help businesses grow and succeed in the digital era.</span></h1>

            <AboutCard/>
        </div>
    );
};

export default AboutUs;