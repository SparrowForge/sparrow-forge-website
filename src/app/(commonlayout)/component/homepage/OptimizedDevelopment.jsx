import OptimizedDevelopmentLeft from "../design/OptimizedDevelopmentLeft";
import OptimizedDevelopmentRight from "../design/OptimizedDevelopmentRight";


const OptimizedDevelopment = () => {
    return (
        <div className="relative w-full  h-[1400px] py-20 bg-lightblue/10"
            style={{
                backgroundImage: "url('/newDesign/growing/patternBig.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="md:w-[1194px] mx-auto flex flex-col md:flex-row items-start">
                {/* Left text section sticks while scrolling */}
                <div className="w-1/2 sticky top-10  self-start">
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