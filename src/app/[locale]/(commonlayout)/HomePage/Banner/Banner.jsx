import React from 'react';
import BannerCard from '../../card/BannerCard';
import Navbar from '../../shared/Navbar';
import HomeBannerAbove from '../../components/Banner/HomeBannerAbove';
import MobileViewCard from '../../components/Banner/MobileViewCard';
const Banner = () => {
    return (
        <div id="home" className="relative pb-20  bg-deepblue w-full"
            style={{
                backgroundImage: "url('/growing/Pattern.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} >

            <div className='w-full lg:w-[1194px] lg:mx-auto  '>
                <Navbar />
                {/* <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                    <HomeBannerAbove/>
                    <BannerCard/>
                </div> */}
                <div>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 lg:gap-10 md:px-2 lg:px-0'>
                        <HomeBannerAbove />
                        <BannerCard />
                        <MobileViewCard />


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
