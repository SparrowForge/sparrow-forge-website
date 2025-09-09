import React from 'react';
import TransformIdeasCard from '../card/TransformIdeasCard';
import Title from '../shared/Title';
import TransformIdeasHeader from '../design/TransformIdeasHeader';

const TransformIdeas = () => {
    return (
        <div
            className='mx-4 md:mx-10 py-20 '
        >
           <TransformIdeasHeader/>
            <TransformIdeasCard />
        </div>
    );
};

export default TransformIdeas;