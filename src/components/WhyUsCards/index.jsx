import React from "react";
import ContactButton from "../ContactButton";
import teams from "../../assets/icons/group.png";
import mortarboard from "../../assets/icons/mortarboard.png";
import tech from "../../assets/icons/coding.png";
import "./styles.css";

const WhyUsCards = () => {
  return (
    <div className="details card-container">
      <div className="card">
        <div className="card-content">
          <img src={teams} alt="Teams Icon" className="icon" />
          <h2 className="card-title">Our Story</h2>
          <p className="card-text">
            We started as a small team of IT enthusiasts who wanted to help
            small businesses overcome their technology challenges. Today, we
            have grown into a leading provider of IT services.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <img src={mortarboard} alt="Mortarboard Icon" className="icon" />
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            To revolutionize the IT industry by pushing the boundaries of
            innovation. We strive to be at the forefront of technological
            advancement, continuously pioneering new solutions that empower
            businesses and individuals to thrive in a rapidly evolving digital
            landscape.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content" >
          <img src={tech} alt="Tech Icon" className="icon" />
          <h2 className="card-title">Technologies</h2>
          <p className="card-text">
            We offer a comprehensive range of IT services. Our services are
            designed to help small businesses thrive in today&apos;s digital world.
          </p>
          <a href="/services" className="learn-more">Learn More</a>
        </div>
      </div>
      <div>
        <ContactButton/>
      </div>
    </div>
  );
};

export default WhyUsCards;
