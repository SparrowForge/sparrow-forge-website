import React from 'react';
import TransformIdeasCard from '../card/TransformIdeasCard';
import Title from '../shared/Title';
import TransformIdeasHeader from '../design/TransformIdeasHeader';

const TransformIdeas = () => {
    return (
        <div
            className='md:w-[1194px] mx-auto   py-20 '
        >
           <TransformIdeasHeader/>
            <TransformIdeasCard />
        </div>
    );
};

export default TransformIdeas;