import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Tagline } from "../../components/Tagline/Tagline";
import { Card } from "../../components/Cards/Card";
import PartnerDetails from "../../components/PartnerDetails";

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
