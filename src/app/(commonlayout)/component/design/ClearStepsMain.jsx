import React from 'react';
import ClearStepsLeft from './ClearStepsLeft';
import ClearStepsRight from './ClearStepsRight';

const ClearStepsMain = () => {
  return (
    <>
      {/* Left text section sticks while scrolling */}
      <div className="flex-1 sticky top-20  self-start">
        <ClearStepsLeft />
      </div>

      {/* Right scroll/slider section */}
      <div className="flex-1 h-full">
        <ClearStepsRight />
      </div>
    </>
  );
};

export default ClearStepsMain;