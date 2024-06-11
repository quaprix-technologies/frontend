import React from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES_PAGE_PATH } from "../../constants.js";
import Card from "../Card";
import { data } from "./whyUsCardData.js";
import ContactButton from "../ContactButton";
import "./styles.css";

const WhyUsCards = () => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(SERVICES_PAGE_PATH);
  };

  return (
    <div className="why-us-card-container">
      {data.map((cardData, index) => {
        const { icon, title, content, linkLable } = cardData;
        return (
          <div key={index} className="why-us-card">
            <Card
              icon={icon}
              title={title}
              content={content}
              linkLable={linkLable}
              onLinkClick={() => handleOnClick(linkLable)}
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
