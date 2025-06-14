
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import MainBanner from "./component/homepage/MainBanner";
import TestimonialSection from "./component/homepage/TestimonialSection";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto  min-h-screen">
      <MainBanner />
      <IndustriesWeServe/>
      <TestimonialSection />

    </div>
  );
}
