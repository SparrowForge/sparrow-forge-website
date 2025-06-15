
import SharedCard from "./component/card/SharedCard";
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import MainBanner from "./component/homepage/MainBanner";
import OurLatestBlog from "./component/homepage/OurLatestBlog";
import TestimonialSection from "./component/homepage/TestimonialSection";
import TrustedBy from "./component/homepage/TrustedBy";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto  min-h-screen font-urbanist">
      <MainBanner />
      <TrustedBy/>
      <OurLatestBlog/>
      <IndustriesWeServe/>
      <TestimonialSection />
    
    </div>
  );
}
