import React from "react";
import Card from "../Card";
import { data } from "./whyUs-data.js";
import ContactButton from "../ContactButton";

import "./styles.css";

const WhyUsCards = () => {
  return (
    <div className="why-us-card-container">
      {data.map((cardData, index) => {
        const { icon, title, content, url } = cardData;
        return (
          <div key={index} className="why-us-card">
            <Card icon={icon} title={title} content={content} url={url} />
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
