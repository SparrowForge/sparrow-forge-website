import Image from 'next/image';
import React from 'react';

const Button = ({ title, className, image }) => {
    return (

        <button className={className}>
            <div className='flex justify-between items-center gap-2'>
                <span>{title}</span>
                {image && (
                    <Image
                        src={image}
                        alt="arrow"
                        width={12}
                        height={12}
                        className="inline-block h-auto w-auto"
                    />
                )}
            </div>
        </button>

    );
};

export default Button;
