import React from 'react';

const ButtonTitle = ({title}) => {
    return (
        <div>
            <button className="bg-gray py-1 px-2 md:px-3 rounded-full text-[12px] md:text-[16px]">
                {title}
            </button>
        </div>
    );
};

export default ButtonTitle;