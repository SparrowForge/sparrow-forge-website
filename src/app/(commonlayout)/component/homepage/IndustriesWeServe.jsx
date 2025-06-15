import React from 'react';
import IndustriesWeServeBanner from '../design/IndustriesWeServeBanner';
import IndustriesCard from '../card/IndustriesCard';

const IndustriesWeServe = () => {
    return (
        <div 
        className='mx-4 md:mx-10 py-20 '
        >
            <IndustriesWeServeBanner/>
            <IndustriesCard/>
        </div>
    );
};

export default IndustriesWeServe;