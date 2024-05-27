import React from "react";
import { Hero } from "../../Component/Hero/Hero";
import { Tagline } from "../../Component/Tagline/Tagline";
import { Card } from "../../Component/Cards/Card";
import PartnerDetails from "../../Component/PartnerDetails";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Tagline />
      <Card />
      <PartnerDetails/>
    </div>
  );
};

export default Homepage;
