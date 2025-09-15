import Image from 'next/image';
import React from 'react';

const SparrowLogo = () => {
    return (
        <div className="flex">
            <Image src="/shared/logo.png" alt="Logo" width={55} height={55} />

              <div className="leading-tight text-white">
                <h1 className="text-xl font-bold tracking-tight line-clamp-5">Sparrow Forge</h1>
                <p className="text-start text-[8px] font-medium tracking-[0.5em] uppercase mt-1">
                    FORGE THE FUTURE
                </p>

            </div>
        </div>
    );
};

export default SparrowLogo;
