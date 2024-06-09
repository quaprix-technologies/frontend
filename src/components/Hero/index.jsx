import React from "react";
import { useNavigate } from "react-router-dom";
import video from "../../assets/hero-images/hero-section.mp4";
import "./styles.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/contact-us");
  };

  return (
    <div className="hero">
      <video src={video} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-wrap">
        <h1>
          STREAMLINE YOUR
          <br />
          IT OPERATION
        </h1>
        <p>
          Efficient and cost-effective IT services for <br /> businesses of all
          sizes.
        </p>
      </div>
      <button className="bottom-btn" onClick={handleOnClick}>
        Get Started
      </button>
    </div>
  );
};

export default Hero;
