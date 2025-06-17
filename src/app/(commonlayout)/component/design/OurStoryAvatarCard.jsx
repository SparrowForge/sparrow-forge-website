import React from 'react';
import AvatarGroup from './AvatarGroup';

const OurStoryAvatarCard = () => {
    return (
        <div className='bg-white rounded-[38px] flex flex-col justify-between items-start p-10'>
            <h1 className='text-[18px] font-bold text-green'>Meet the Minds Behind the Magic A Team of Thinkers, Makers, and Problem-Solver</h1>
            <AvatarGroup/>
            
        </div>
    );
};

export default OurStoryAvatarCard;