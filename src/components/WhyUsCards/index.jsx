import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import ContactButton from "../ContactButton";
import Data from "./whyUsCardData.js";
import { SERVICES_PAGE_PATH } from "../../constants.js";
import "./styles.css";

const WhyUsCards = () => {
  const navigate = useNavigate();

  return (
    <div className="why-us-card-container">
      {Data.map((cardData, index) => {
        const { icon, title, content, linkLabel } = cardData;
        return (
          <div key={index} className="why-us-card">
            <Card
              icon={icon}
              title={title}
              content={content}
              linkLabel={linkLabel}
              onLinkClick={() => navigate(SERVICES_PAGE_PATH)}
            />
          </div>
        );
      })}
      <div className="why-us-card-button">
        <ContactButton />
      </div>
    </div>
  );
};

export default WhyUsCards;
