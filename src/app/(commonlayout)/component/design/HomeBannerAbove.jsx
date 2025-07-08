import Image from "next/image";
import Button from "../shared/Button";
import ButtonTitle from "../shared/ButtonTitle";


const HomeBannerAbove = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10 px-4 md:px-0 md:gap-4">
            <div className="flex justify-center items-center gap-0 md:gap-2 py-1 px-1 md:px-2 bg-white rounded-full mb-4 md:mb-0 text-[10px] md:text-[16px]">
               <ButtonTitle title="Achievements! 🏆" />
              <p className="">  BDT 1M Raised Building Smarter Solutions</p>
                <Image src="/bannerImg/arrowRightDown.svg"
                alt="image"
                    width={60}
                    height={60}
                    className='w-auto h-auto' />

            </div>
            <h1 className="text-xl md:text-[50px] text-title font-bold text-center">
                From Vision to Velocity — Custom Software Solutions for Business Growth and Excellence.
            </h1>
            <p className="text-[12px] md:text-[20px] text-navtext font-[500px] text-center">Excelerate Your Startup with Digital Solutions Built<br />  for Speed, Scale, and Sustainability. </p>
            <div className='border border-lightblue p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px] mt-4'>
                <Button
                    image="/bannerImg/arrowRightUp.svg"
                    title="Get Started"
                    className="bg-lightblue text-white text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full " />
            </div>

        </div>
    );
};

export default HomeBannerAbove;