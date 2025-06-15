
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import MainBanner from "./component/homepage/MainBanner";
import TestimonialSection from "./component/homepage/TestimonialSection";
import TrustedBy from "./component/homepage/TrustedBy";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto  min-h-screen">
      <MainBanner />
      <TrustedBy/>
      <IndustriesWeServe/>
      <TestimonialSection />

    </div>
  );
}
