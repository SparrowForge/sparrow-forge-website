import Image from 'next/image';
import React from 'react';

const SparrowLogo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />

            <div className="leading-tight">
                <h1 className="text-lg font-bold tracking-tight">Sparrow Forge</h1>
                <p className="text-center text-[7px] font-medium tracking-[0.3em] uppercase">
                    Software Solutions
                </p>

            </div>
        </div>
    );
};

export default SparrowLogo;
