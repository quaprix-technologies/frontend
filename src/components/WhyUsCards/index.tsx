import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import ContactButton from "../ContactButton";
import { navigateAndScrollToElement } from "../../utils";
import WHY_US_DATA from "./whyUsData";
import "./styles.css";

interface CardData {
  icon: string;
  title: string;
  content: string;
  link?: {
    label: string;
    url: string;
    elementId: string;
  };
}

const WhyUsCards: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (url?: string, elementId?: string) => {
    if (url && elementId) {
      navigateAndScrollToElement({
        navigate,
        path: url,
        elementId: elementId,
        milliseconds: 0,
      });
    }
  };

  return (
    <div className="why-us-section">
      <div className="why-us-title">Why us?</div>
      <div className="why-us-cards">
        {WHY_US_DATA.map((cardData: CardData, index: number) => {
          const { icon, title, content, link } = cardData;
          return (
            <div key={index} className="why-us-card">
              <Card
                icon={icon}
                title={title}
                content={content}
                link={link}
                onLinkClick={() => handleLinkClick(link?.url, link?.elementId)}
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
