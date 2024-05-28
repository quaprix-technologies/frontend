import React from "react";
import "./About.css";

const About = () => {
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
      <div className="aboutus-text about-container">
        <h1>About Us</h1>
        <p>
          At Quaprix, we're dedicated to providing cutting-edge information
          technology (IT) services that drive your business forward. With our
          expertise and commitment to excellence, we offer a comprehensive suite
          of services tailored to meet your unique needs and propel your success
          in today's digital landscape.
        </p>
        <p>
          Working as a partner with our clients, we are dedicated to developing
          effective outsourcing partnerships in order to reduce operational cost
          and empowering them to devote more time to their core business.
        </p>
        <p>
          We have served different industries like field service management,
          IoT-Utilities, healthcare, predictive analysis, financial services,
          retail & eCommerce, blockchain, and workflow automation etc. We
          deliver solutions that open a world of possibilities for our clients.
        </p>
      </div>
      <div className="background-container2">
        <h1>Get In Touch With Us</h1>
        <button className="contact-btn">
          <a href="/contact-us">Contact</a>
        </button>
      </div>
    </>
  );
};

export default About;
