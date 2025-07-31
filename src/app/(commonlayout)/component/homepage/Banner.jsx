import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[200px] md:h-[400px] mb-4 ">
            <Image
                src="/Sparrow_Banner.png" // ✅ remove `/public`
                alt="Banner image"
                layout="fill" // makes the image fill the parent container
                objectFit="cover" // maintain aspect ratio
                priority // optional: for faster loading
                className="rounded-4xl 2xl:rounded-[46px] 2xl:px-4 "
            />
        </div>
    );
};

export default Banner;
