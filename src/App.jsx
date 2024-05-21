import React from "react";
import { Navbar } from "./Component/Navbar/Navbar";
import { Hero } from "./Component/Hero/Hero";
import { Tagline } from "./Component/Tagline/Tagline";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tagline />
    </div>
  );
};

export default App;
