import React from "react";

const CaseStudiesStats = () => {
  const stats = [
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "100%", label: "Average ROI Increase" },
    { value: "97%", label: "Project Delivery Time Reduced" },
  ];

  return (
    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 mt-8 bg-lightblue/10 p-6 rounded-lg text-start w-full">
      {stats.map((stat, idx) => (
        <div key={idx} className="pl-12 py-2">
          <h3 className="text-2xl md:text-[62px] font-semibold text-lightblue">{stat.value}</h3>
          <p className="text-lightblue text-sm md:text-[18px]">/{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesStats;
