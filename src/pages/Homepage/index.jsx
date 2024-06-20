import React from "react";
import Hero from "../../components/Hero";
import WhyUsCards from "../../components/WhyUsCards";
import PartnersBanner from "../../components/PartnersBanner";
import Tagline from "../../components/Tagline";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Tagline />
      <WhyUsCards />
      <PartnersBanner/>
    </div>
  );
};

export default Homepage;
