import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import ContactButton from "../ContactButton";
import { navigateAndScrollToElement } from "../../utils.js";
import WHY_US_CARDS_DATA from "./whyUsCardsData.js";
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
    <div className="why-us-cards">
      {WHY_US_CARDS_DATA.map((cardData, index) => {
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
      {/* <ContactButton /> */}
    </div>
  );
};

export default WhyUsCards;
