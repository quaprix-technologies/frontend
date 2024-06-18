import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsBanner from "../../components/AboutUsBanner";
import AboutUsDescription from "../../components/AboutUsDescription";
import { CONTACT_US_PAGE_PATH } from "../../constants";
import "./styles.css";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(CONTACT_US_PAGE_PATH);
  };

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
          <button className="about-us-section-button" onClick={handleOnClick}>
            Get Started now
          </button>
        </div>
      </div>
      <AboutUsDescription />
      <AboutUsBanner />
    </div>
  );
};

export default AboutUs;
