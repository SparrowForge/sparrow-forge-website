import React from 'react';
import Button from '../shared/Button';

const OptimizedDevelopmentLeft = () => {
    return (
        <div className="flex-1 flex flex-col justify-center gap-6 px-6 md:px-12">
            <h2 className="text-2xl md:text-[62px] font-bold leading-snug text-deepblue">
                Excellence in <br /> AI-Optimized Development
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg">
                We leverage advanced AI throughout every stage of development—
                accelerating delivery by 10X while ensuring top-tier reliability.
                <br />
                <br />
                Our team combines deep human expertise with AI-powered automation to
                streamline processes, enhance quality, and build software ready for the
                future.
            </p>
            <div>
               <Button
                image="/bannerImg/arrowRightUpWhite.svg"
                title="Get Started"
                className="bg-lightblue text-white text-sm md:text-[14px] px-4 py-2 rounded-full " />  
            </div>
           
        </div>
    );
};

export default OptimizedDevelopmentLeft;