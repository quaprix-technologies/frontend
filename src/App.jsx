import React from "react";
import { Navbar } from "./Component/Navbar/Navbar";
import { Hero } from "./Component/Hero/Hero";
import { Tagline } from "./Component/Tagline/Tagline";
import { Footer } from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tagline />
      <Footer />
    </div>
  );
};

export default App;
