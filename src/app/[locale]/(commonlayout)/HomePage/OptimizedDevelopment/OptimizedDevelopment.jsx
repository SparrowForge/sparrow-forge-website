import OptimizedDevelopmentLeft from "../../components/OptimizedDevelopment/OptimizedDevelopmentLeft";
import OptimizedDevelopmentRight from "../../components/OptimizedDevelopment/OptimizedDevelopmentRight";
import OptimizedDevelopmentRightMb from "../../components/OptimizedDevelopment/OptimizedDevelopmentRightMb";



const OptimizedDevelopment = () => {
    return (
        <div className="relative w-full py-10 md:py-20 bg-lightblue/10"
            style={{
                backgroundImage: "url('/growing/PatternBig.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-[1194px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
                {/* Left Section */}
                <div className="w-full md:w-1/2 md:sticky md:top-20 self-start">
                    <OptimizedDevelopmentLeft />
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2">
                    {/* Desktop View */}
                    <div className="hidden md:block md:h-[1200px]">
                        <OptimizedDevelopmentRight />
                    </div>

                    {/* Mobile View */}
                    <div className="block md:hidden w-full mx-auto">
                        <OptimizedDevelopmentRightMb />
                    </div>
                </div>

            </div>




        </div>
    );
};

export default OptimizedDevelopment;