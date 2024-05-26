import React from "react";
import { Hero } from "../../Component/Hero/Hero";
import { Tagline } from "../../Component/Tagline/Tagline";
import { Card } from "../../Component/Cards/Card";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Tagline />
      <Card />
    </div>
  );
};

export default Homepage;
