import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-[56px] font-bold'>{title}</h1>
            <p className='text-[20px] text-navtext md:mx-80 text-center'>{subtitle}</p>
        </div>
    );
};

export default Title;