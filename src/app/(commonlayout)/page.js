
import AboutUs from "./component/homepage/AboutUs";
import Banner from "./component/homepage/Banner";
import CompleteSupportTechStack from "./component/homepage/CompleteSupportTechStack";
import Estimated from "./component/homepage/Estimated";
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import Innovation from "./component/homepage/Innovation";
import MainBanner from "./component/homepage/MainBanner";
import OurGlobalFamily from "./component/homepage/OurGlobalFamily";
import OurLatestBlog from "./component/homepage/OurLatestBlog";
import OurProjects from "./component/homepage/OurProjects";
import OurServices from "./component/homepage/OurServices";
import OurStory from "./component/homepage/OurStory";
import TestimonialSection from "./component/homepage/TestimonialSection";
import TransformIdeas from "./component/homepage/TransformIdeas";
import TrustedBy from "./component/homepage/TrustedBy";
import ScrollToTop from "./component/shared/ScrollToTop";

export default function Home() {
  return (
    <div className="w-full xl:max-w-[1400px] mx-auto  min-h-screen font-urbanist xl:mb-10 md:mx-10 ">
      <Banner/>
      <MainBanner />
     
      <TransformIdeas/>  {/* new component  */}
      <Estimated/>{/* new component  */}
      <CompleteSupportTechStack/> {/* new component  */}
      
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
    <ScrollToTop/>
    </div>
  );
}
