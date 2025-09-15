import React from 'react';

const Title = ({ title, subtitle, className = '' }) => {
    return (
        <div className={` ${className}`}>
            <h1 className='text-[34px] md:text-[56px] font-bold '>{title}</h1>
            <p className='text-[14px] md:text-[20px] text-navtext  '>{subtitle}</p>
        </div>
    );
};

export default Title;
