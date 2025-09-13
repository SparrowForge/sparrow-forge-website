import Image from "next/image";
import Button from "../shared/Button";
import ButtonTitle from "../shared/ButtonTitle";


const HomeBannerAbove = () => {
    return (
        <div className="flex flex-col justify-start items-start py-10 px-4 md:px-0 md:gap-4">
            <div className="flex justify-center items-center gap-0 md:gap-2 py-1 px-1 md:px-2 bg-gray/5 text-white rounded-full mb-4 md:mb-0 text-[10px] md:text-[16px] ">
                <ButtonTitle title="Achievements!" />
                <p className="">  BDT 1M Raised Building Smarter Solutions</p>
                <Image src="/bannerImg/arrowRightUpWhite.svg"
                    alt="image"
                    width={40}
                    height={40}
                    className='w-auto h-auto' />

            </div>
            <h1 className="text-xl md:text-[80px] text-white font-bold text-start">
                Build Your <br /> <span className="text-yellow-500">Dream Product</span> <br /> in 4x Faster
            </h1>
            <p className="text-[12px] md:text-[20px] text-gray/40 font-[500px] text-start">From startups to enterprises—build scalable products 4x faster with our expert teams and proven processes </p>

            <Button
                image="/bannerImg/arrowRightUpWhite.svg"
                title="Get Started"
                className="bg-lightblue text-white text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full " />


        </div>
    );
};

export default HomeBannerAbove;