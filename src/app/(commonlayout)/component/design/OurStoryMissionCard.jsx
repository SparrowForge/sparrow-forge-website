import Image from "next/image";


const OurStoryMissionCard = () => {
    return (
        <div className="bg-green flex justify-center px-10 text-white rounded-[38px]">
            <div className="flex flex-col justify-between items-start py-10">
                <div>
                    <h1 className="text-[28px]">Our Mission</h1>
                    <p className="text-[14px]">To create smart, reliable digital solutions that empower businesses to grow, innovate, and succeed — all through clean design, custom development, and user-first thinking.</p>
                </div>
                <div className='border border-gray/50 p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px] mt-4'>
                    <button className="border border-gray/50 rounded-full text-white/90 text-[12px] py-1 px-2 bg-gray/10">Learn More</button>

                </div>
            </div>
            <Image
                src="/story/Line2.svg"
                width={30}
                height={40}
                alt='image'
                className='hidden md:flex w-auto h-auto' />

        </div>
    );
};

export default OurStoryMissionCard;