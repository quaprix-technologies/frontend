import React from "react";
import "./Card.css";
import teams from "../../assets/group.png";
import mortarboard from "../../assets/mortarboard.png";
import tech from "../../assets/coding.png";

export const Card = () => {
  return (
    <div className="details">
      <div className="card">
        <div className="card-content">
          <img src={teams} alt="Star Icon" className="icon" />
          <h2 className="card-title">Our Story</h2>
          <p className="card-text">
            We started as a small team of IT enthusiasts who wanted to help
            small businesses overcome their technology challenges. Today, we
            have grown into a leading provider of IT services.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={mortarboard} alt="Star Icon" className="icon" />
        <h2 className="card-title">Our Mission</h2>
        <p className="card-text">
          To revolutionize the IT industry by pushing the boundaries of
          innovation. We strive to be at the forefront of technological
          advancement, continuously pioneering new solutions that empower
          businesses and individuals to thrive in a rapidly evolving digital
          landscape.
        </p>
      </div>
      <div className="card">
        <img src={tech} alt="Star Icon" className="icon" />
        <h2 className="card-title">Technologies</h2>
        <p className="card-text">
          We offer a comprehensive range of IT services, Our services are
          designed to help small businesses thrive in today's digital world.
        </p>
        <a href="#" className="learn-more">Learn More</a>
      </div>
      {/* <div className="button-container">
        <button>Contact Us</button>
      </div> */}
    </div>
  );
};