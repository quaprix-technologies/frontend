import React, { useEffect } from "react";
import "./About.css";
import AboutText from "../../Component/AboutText/AboutText";
import AboutBanner from "../../Component/AboutBanner/AboutBanner";

const About = () => {
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
      <AboutText />
      <AboutBanner />
    </div>
  );
};

export default About;
