import React from 'react';

const ButtonTitle = ({title}) => {
    return (
        <div>
            <button className="bg-gray py-1 px-2 md:px-3 rounded-full">
                {title}
            </button>
        </div>
    );
};

export default ButtonTitle;