import React from "react";
import "./Hero.css";
import video from "../../assets/hero_section.mp4";

export const Hero = () => {
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
          Efficient and cost-effective IT services for <br /> businesses of all sizes.
        </p>
      </div>
      <button className="bottom-btn">Get Started</button>
    </div>
  );
};
