/** @format */

import React, { useEffect} from "react";
import HeadingCont from "../Component/Partial/heading-cont";
import AboutUs from "../Component/Shared/about-us";
import Banner from "../Component/Shared/Banner";
import ServiceSlider from "../Component/Sliders/ServiceSlider";
import ReviewSlider from "../Component/Sliders/ReviewSlider";
import IndexBanner from "../Component/Partial/index-banner";
import IndexBuisnessBanner from "../Component/Partial/index-buisness-banner";
import LinkSection from "../Component/Partial/LinkSection";
import PopularJobSlider from "../Component/Sliders/PopularJobSlider";
import StaffReview from '../Component/Sliders/StaffReview'


const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return (
    <>
      <Banner />
      <div className="hello"></div>
      <div className="bannerUnder">
      <HeadingCont
        title={"Who we Are?"}
       
      />
      <AboutUs />
      <HeadingCont
        title={"Popular Jobs"}
      />
      <PopularJobSlider />
      <HeadingCont
        title={"Trending Services"}
        
      />
      <ServiceSlider />
      <HeadingCont
        title={" Client Reviews"}
      />
      <ReviewSlider />
      <div className="mt-5"></div>
      <HeadingCont
        title={"Staff Reviews"}
      />
      <StaffReview />
      <IndexBanner />
      <IndexBuisnessBanner />
      <div className="mt-5"></div>
      <LinkSection />
      </div>
    </>
  );
};

export default HomePage;
