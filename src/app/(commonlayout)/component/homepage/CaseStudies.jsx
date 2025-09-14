import React from 'react';
import CaseStudiesHeader from '../design/CaseStudiesHeader';
import CaseStudiesSlider from '../design/CaseStudiesSlider';
import CaseStudiesStats from './CaseStudiesStats';

const CaseStudies = () => {
    return (
        <div className='w-full my-10'>
            <div className="md:w-[1194px] mx-auto flex flex-col justify-between items-start">
                <CaseStudiesHeader />
                <CaseStudiesSlider />
                <CaseStudiesStats />
            </div>

        </div>
    );
};

export default CaseStudies;