import OptimizedDevelopmentLeft from "../design/OptimizedDevelopmentLeft";
import OptimizedDevelopmentRight from "../design/OptimizedDevelopmentRight";


const OptimizedDevelopment = () => {
    return (
        <div className="relative w-full py-10 md:py-20 bg-lightblue/10"
            style={{
                backgroundImage: "url('/newDesign/growing/PatternBig.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-[1194px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
                {/* Left Section */}
                <div className="w-full md:w-1/2 md:sticky md:top-20 self-start">
                    <OptimizedDevelopmentLeft />
                </div>

                {/* Right scroll/slider section */}
                <div className="w-1/2 h-[1200px]">
                    <OptimizedDevelopmentRight />
                </div>
            </div>




        </div>
    );
};

export default OptimizedDevelopment;