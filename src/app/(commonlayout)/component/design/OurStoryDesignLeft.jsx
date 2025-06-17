import React from 'react';
import OurStoryMissionCard from './OurStoryMissionCard';
import OurStorySlider from './OurStorySlider';
import OurStoryAvatarCard from './OurStoryAvatarCard';

const OurStoryDesignLeft = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <OurStoryAvatarCard/>
                <OurStoryMissionCard />
            </div>
            <OurStorySlider />
        </div>
    );
};

export default OurStoryDesignLeft;