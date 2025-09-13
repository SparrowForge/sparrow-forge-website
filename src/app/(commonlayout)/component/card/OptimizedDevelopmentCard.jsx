

const OptimizedDevelopmentCard = ({ value, title, subtitle, description }) => (
    <div className="bg-white shadow-md rounded-xl p-6 w-[300px] md:w-[400px] flex flex-col gap-2">
       <div className="flex justify-start items-end">
         <h2 className="text-xl md:text-[62px] font-bold text-lightblue">
            {value}
        </h2>
        <h3 className="text-[14px] font-semibold text-gray-500 mb-4">{subtitle}</h3>
       </div>
        <hr className="h-1 text-gray" />
        <h3 className="font-semibold text-lg text-deepblue">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

export default OptimizedDevelopmentCard;