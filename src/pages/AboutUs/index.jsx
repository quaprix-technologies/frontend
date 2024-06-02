import React, { useEffect } from "react";
import "./About.css";
import AboutText from "../../Component/AboutText/AboutText";
import Button from "../../Component/ContactUsBtn/Button";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
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
      <div className="background-container2">
        <h1>Get In Touch With Us</h1>
        <Button/>
      </div>
    </>
  );
};

export default About;
