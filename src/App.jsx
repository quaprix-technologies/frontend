import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Component/Navbar/Navbar";
import { Hero } from "./Component/Hero/Hero";
import { Tagline } from "./Component/Tagline/Tagline";
import { Footer } from "./Component/Footer/Footer";
import { Card } from "./Component/Cards/Card";
import ContactUs from "./Component/ContactUs/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tagline />
      <Card />
      <Footer />
      {/* <ContactUs/> */}
    </div>
  );
};

export default App;
