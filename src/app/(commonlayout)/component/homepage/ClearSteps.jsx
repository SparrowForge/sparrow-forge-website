import React from "react";
import ClearStepsLeft from "../design/ClearStepsLeft";
import ClearStepsRight from "../design/ClearStepsRight";
import ClearStepsRrightMB from "./ClearStepsRrightMB";

const ClearSteps = () => {
  return (
    <div
      className="relative w-full py-10 md:py-20 bg-lightblue/10"
      style={{
        backgroundImage: "url('/newDesign/growing/PatternBig.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1194px] mx-auto flex flex-col justify-between md:flex-row items-start gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:sticky md:top-20 self-start">
          <ClearStepsLeft />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          {/* Desktop View */}
          <div className="hidden md:block md:h-[1200px]">
            <ClearStepsRight />
          </div>

          {/* Mobile View */}
          <div className="block md:hidden w-full mx-auto">
            <ClearStepsRrightMB />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearSteps;
