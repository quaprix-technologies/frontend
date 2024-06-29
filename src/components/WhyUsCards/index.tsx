import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import ContactButton from "../ContactButton";
import { navigateAndScrollToElement } from "../../utils";
import WHY_US_CARDS_DATA from "./whyUsData";
import { WhyUsCardType } from "./types";
import "./styles.css";

const WhyUsCards: FC = () => {
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
        {WHY_US_CARDS_DATA.map((card: WhyUsCardType, index: number) => {
          const { icon, title, content, link } = card;
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
