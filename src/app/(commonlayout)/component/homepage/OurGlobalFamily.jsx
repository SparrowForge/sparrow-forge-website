import React from 'react';
import WorldMapWithLocations from '../design/WorldMapWithLocations';
import Title from '../shared/Title';

const OurGlobalFamily = () => {
    return (
        <div className='flex flex-col justify-between items-center py-10'>
            <Title title="Our Global Family" subtitle="Our international presence enables us to collaborate across cultures, solve complex challenges, and deliver scalable digital solutions that drive success worldwide." className="flex flex-col justify-center items-center gap-4 my-4 md:mx-72 text-center"/>
            <WorldMapWithLocations/>
        </div>
    );
};

export default OurGlobalFamily;