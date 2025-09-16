import React from 'react';
import BannerCard from '../../card/BannerCard';
import Navbar from '../../shared/Navbar';
import HomeBannerAbove from '../../components/Banner/HomeBannerAbove';
const Banner = () => {
    return (
        <div id="home" className="relative pb-20  bg-deepblue w-full"
            style={{
                backgroundImage: "url('/growing/Pattern.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} >

            <div className='lg:w-[1194px] md:mx-auto '>
                <Navbar/>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <HomeBannerAbove/>
                    <BannerCard/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
