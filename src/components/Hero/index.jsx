import React from "react";
import { useNavigate } from "react-router-dom";
import { AdvancedVideo } from '@cloudinary/react';
import useCloudinary from "../../hooks/useCloudinary.js";
import assets from "../../assets.js";
import { CONTACT_US_PAGE_PATH } from "../../constants";
import "./styles.css";

const Hero = () => {
  const cld = useCloudinary();
  const myVideo = cld.video(assets.homepage_hero);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(CONTACT_US_PAGE_PATH);
  };

  return (
    <div className="hero">
      <AdvancedVideo cldVid={myVideo} autoPlay loop muted />
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
      <button className="hero-section-button" onClick={handleOnClick}>
        Get Started
      </button>
    </div>
  );
};

export default Hero;
