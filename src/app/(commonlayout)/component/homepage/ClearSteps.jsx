import React from "react";
import ClearStepsLeft from "../design/ClearStepsLeft";
import ClearStepsRight from "../design/ClearStepsRight";

const ClearSteps = () => {
    return (
        <div
            className="relative w-full  h-[1400px] py-20 bg-lightblue/10"
            style={{
                backgroundImage: "url('/newDesign/growing/PatternBig.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="md:w-[1194px] mx-auto flex flex-col md:flex-row items-start">
                {/* Left text section sticks while scrolling */}
                <div className="w-1/2 sticky top-20  self-start">
                    <ClearStepsLeft />
                </div>

                {/* Right scroll/slider section */}
                <div className="w-1/2 h-[1200px]">
                    <ClearStepsRight />
                </div>
            </div>

        </div>
    );
};

export default ClearSteps;
