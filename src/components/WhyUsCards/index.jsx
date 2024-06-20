import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import ContactButton from "../ContactButton";
import {navigateAndScrollToElement} from "../../utils.js";
import WHY_US_CARDS_DATA from "./whyUsCardsData.js";
import {FIRST_SERVICES_SECTION_ID, SERVICES_PAGE_PATH} from "../../constants.js";
import "./styles.css";

const WhyUsCards = () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
      navigateAndScrollToElement({
          navigate,
          path: SERVICES_PAGE_PATH,
          elementId: FIRST_SERVICES_SECTION_ID
      })
  }

  return (
    <div className="why-us-card-container">
      {WHY_US_CARDS_DATA.map((cardData, index) => {
        const { icon, title, content, linkLabel } = cardData;
        return (
          <div key={index} className="why-us-card">
            <Card
              icon={icon}
              title={title}
              content={content}
              linkLabel={linkLabel}
              onLinkClick={handleLinkClick}
            />
          </div>
        );
      })}
      <ContactButton />
    </div>
  );
};

export default WhyUsCards;
