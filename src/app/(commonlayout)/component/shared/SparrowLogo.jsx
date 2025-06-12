import Image from 'next/image';
import React from 'react';

const SparrowLogo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span className="font-semibold text-[20px]">Sparrow Forge</span>
        </div>
    );
};

export default SparrowLogo;