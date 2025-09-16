import Banner from "./HomePage/Banner/Banner";
import CaseStudies from "./HomePage/CaseStudies/CaseStudies";
import OptimizedDevelopment from "./HomePage/OptimizedDevelopment/OptimizedDevelopment";
import TransformIdeas from "./HomePage/TransformIdeas/TransformIdeas";
import TrustedBy from "./HomePage/TrustedBy/TrustedBy";


export default function HomePage() {

  return (
    <div className="flex flex-col justify-center items-center w-full  min-h-screen font-manrope xl:mb-10 md:mx-10 ">
      {/* <LanguageButton/> */}
      <Banner/>
      <TransformIdeas/>
      <TrustedBy/>
      <OptimizedDevelopment/>
      <CaseStudies/>
    </div>
  );
}
