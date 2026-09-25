import React from 'react';
import TransformIdeasHeader from '../../components/TransformIdeas/TransformIdeasHeader';
import TransformIdeasCard from '../../card/TransformIdeasCard';

const TransformIdeas = () => {
    return (
        <div id='service' className='lg:w-[1194px] mx-auto scroll-mt-4 py-10 px-4'>
            <TransformIdeasHeader />
            <TransformIdeasCard />
        </div>
    );
};

export default TransformIdeas;