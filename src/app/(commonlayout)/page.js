
import AboutUs from "./component/homepage/AboutUs";
import Banner from "./component/homepage/Banner";
import CaseStudies from "./component/homepage/CaseStudies";
import ClearSteps from "./component/homepage/ClearSteps";
import ClientsSays from "./component/homepage/ClientsSays";
import CompleteSupportTechStack from "./component/homepage/CompleteSupportTechStack";
import Estimated from "./component/homepage/Estimated";
import IndustriesWeServe from "./component/homepage/IndustriesWeServe";
import Innovation from "./component/homepage/Innovation";
import MainBanner from "./component/homepage/MainBanner";
import OptimizedDevelopment from "./component/homepage/OptimizedDevelopment";
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
    <div className="flex flex-col justify-center items-center w-full  min-h-screen font-manrope xl:mb-10 md:mx-10 ">

      {/* <MainBanner />  */}
      <Banner />{/* new component  */}
      <TransformIdeas />  {/* new component  */}

      <TrustedBy />
      <OptimizedDevelopment />{/* new component  */}
     
<CaseStudies/>{/* new component  */}
      <Estimated />{/* new component  */}
      <OurGlobalFamily />
      <ClearSteps />{/* new component  */}

      {/* <AboutUs /> */}
      {/* <OurLatestBlog /> */}

      {/* <IndustriesWeServe /> */}
      {/* <OurServices /> */}
      {/* <OurProjects /> */}
      {/* <OurStory /> */}
      {/* <Innovation /> */}
      <CompleteSupportTechStack /> {/* new component  */}
      <ClientsSays />{/* new component  */}
      {/* <TestimonialSection /> */}

      <ScrollToTop />
    </div>
  );
}
