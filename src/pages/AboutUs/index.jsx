import React, { useEffect } from "react";
import AboutUsBanner from "../../components/AboutUsBanner";
import AboutUsDescription from "../../components/AboutUsDescription";
import "./styles.css";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div>
      <div className="background-container">
        <div className="text-container">
          <h1>
            Open Your World <br />
            Of Opportunities
            <br />
            With us
          </h1>
          <button className="get-started-btn">
            <a href="/contact-us">Get Started now</a>
          </button>
        </div>
      </div>
      <AboutUsDescription />
      <AboutUsBanner />
    </div>
  );
};

export default AboutUs;
