
import AboutUs from "./component/homepage/AboutUs";
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import Innovation from "./component/homepage/Innovation";
import MainBanner from "./component/homepage/MainBanner";
import OurGlobalFamily from "./component/homepage/OurGlobalFamily";
import OurLatestBlog from "./component/homepage/OurLatestBlog";
import OurProjects from "./component/homepage/OurProjects";
import OurServices from "./component/homepage/OurServices";
import OurStory from "./component/homepage/OurStory";
import TestimonialSection from "./component/homepage/TestimonialSection";
import TrustedBy from "./component/homepage/TrustedBy";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto  min-h-screen font-urbanist">
      <MainBanner />
      <TrustedBy/>
      <AboutUs/>
      <OurLatestBlog/>
      <OurGlobalFamily/> 
      <IndustriesWeServe/>
      <OurServices/>
      <OurProjects/>
      <OurStory/>   
      <Innovation/>
      <TestimonialSection />
    
    </div>
  );
}
