import React from 'react';
import OurStoryMissionCard from './OurStoryMissionCard';
import OurStorySlider from './OurStorySlider';
import OurStoryAvatarCard from './OurStoryAvatarCard';

const OurStoryDesignLeft = () => {
    return (
        <div>
            <div className='flex justify-between  gap-4'>
                <OurStoryAvatarCard/>
                <OurStoryMissionCard />
            </div>
            <OurStorySlider />
        </div>
    );
};

export default OurStoryDesignLeft;