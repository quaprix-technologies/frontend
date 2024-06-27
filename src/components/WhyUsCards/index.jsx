import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import ContactButton from "../ContactButton";
import { navigateAndScrollToElement } from "../../utils.js";
import WHY_US_DATA from "./whyUsData.js";
import "./styles.css";

const WhyUsCards = () => {
  const navigate = useNavigate();

  const handleLinkClick = (url, elementId) => {
    navigateAndScrollToElement({
      navigate,
      path: url,
      elementId: elementId,
    });
  };

  return (
  <div className="why-us-section">
    <div className="why-us-title">Why us?</div>
    <div className="why-us-cards">
      {WHY_US_DATA.map((cardData, index) => {
        const { icon, title, content, link } = cardData;
        return (
          <div key={index} className="why-us-card">
            <Card
              icon={icon}
              title={title}
              content={content}
              link={link}
              onLinkClick={handleLinkClick}
            />
          </div>
        );
      })}
    </div>
    <ContactButton />
  </div>
  );
};

export default WhyUsCards;
