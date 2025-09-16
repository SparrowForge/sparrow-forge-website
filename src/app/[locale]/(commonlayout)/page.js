import Banner from "./HomePage/Banner/Banner";
import CaseStudies from "./HomePage/CaseStudies/CaseStudies";
import ClearSteps from "./HomePage/ClearSteps/ClearSteps";
import Estimated from "./HomePage/Estimated/Estimated";
import OptimizedDevelopment from "./HomePage/OptimizedDevelopment/OptimizedDevelopment";
import OurGlobalFamily from "./HomePage/OurGlobalFamily/OurGlobalFamily";
import TransformIdeas from "./HomePage/TransformIdeas/TransformIdeas";
import TrustedBy from "./HomePage/TrustedBy/TrustedBy";
import ScrollLanguage from "./shared/ScrollLanguage";
import ScrollToTop from "./shared/ScrollToTop";


export default function HomePage() {

  return (
    <div className="flex flex-col justify-center items-center w-full  min-h-screen font-manrope xl:mb-10 md:mx-10 ">
      {/* <LanguageButton/> */}
      <Banner />
      <TransformIdeas />
      <TrustedBy />
      <OptimizedDevelopment />
      <CaseStudies />
      <Estimated />
      <OurGlobalFamily/>
<ClearSteps/>


      <ScrollLanguage />
      <ScrollToTop />
    </div>
  );
}
