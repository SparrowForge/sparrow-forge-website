import React from 'react';
import TransformIdeasHeader from '../../components/TransformIdeas/TransformIdeasHeader';
import TransformIdeasCard from '../../card/TransformIdeasCard';

const TransformIdeas = () => {
    return (
        <div className='lg:w-[1194px] mx-auto py-10 px-4'>
            <TransformIdeasHeader />
            <TransformIdeasCard />
        </div>
    );
};

export default TransformIdeas;