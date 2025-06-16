
import AboutUs from "./component/homepage/AboutUs";
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import Innovation from "./component/homepage/Innovation";
import MainBanner from "./component/homepage/MainBanner";
import OurLatestBlog from "./component/homepage/OurLatestBlog";
import OurServices from "./component/homepage/OurServices";
import TestimonialSection from "./component/homepage/TestimonialSection";
import TrustedBy from "./component/homepage/TrustedBy";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto  min-h-screen font-urbanist">
      <MainBanner />
      <TrustedBy/>
      <AboutUs/>
      <OurLatestBlog/>
      <IndustriesWeServe/>
      {/* <AvatarGroup/> */}
      <OurServices/>
      <Innovation/>
      <TestimonialSection />
    
    </div>
  );
}
