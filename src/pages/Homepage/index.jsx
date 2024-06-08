import React from "react";
import Hero from "../../components/Hero";
import WhyUsCards from "../../components/WhyUsCards";
import PartnerDetails from "../../components/PartnerDetails";
import Tagline from "../../components/Tagline";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Tagline />
      <WhyUsCards />
      <PartnerDetails/>
    </div>
  );
};

export default Homepage;
