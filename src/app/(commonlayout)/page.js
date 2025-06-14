
import MainBanner from "./component/homepage/MainBanner";
import TestimonialSection from "./component/homepage/TestimonialSection";

export default function Home() {
  return (
   <div className="mx-auto  min-h-screen">
   <MainBanner/> 
    <TestimonialSection/>
 
   </div>
  );
}
