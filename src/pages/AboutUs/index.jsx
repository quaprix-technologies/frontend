import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsBanner from "../../components/AboutUsBanner";
import AboutUsDescription from "../../components/AboutUsDescription";
import { navigateAndScrollToElement } from "../../utils";
import { CONTACT_US_CONTAINER_ID, CONTACT_US_PAGE_PATH } from "../../constants";
import "./styles.css";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigateAndScrollToElement({
      navigate,
      path: CONTACT_US_PAGE_PATH,
      elementId: CONTACT_US_CONTAINER_ID,
    });
  };

  return (
    <div>
      <div className="background-container">
        <div className="title-button-container">
          <div className="text-container">
            <h1>Open Your World Of Opportunities With us</h1>
          </div>
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
