import React, {useEffect, useState} from "react";
import {scrollToElement} from "../../../utils.js";
import {sections} from "../services-data.js";
import Card from "../../../components/Card/index.jsx";
import "./styles.css";

const ServicesSection = ({ id, icon, title, rows, isOpen, onClick }) => (
  <div className="section" id={id}>
    <div onClick={onClick} className="section-header">
      <h2 className="section-title">{title}</h2>
      {icon && <img src={icon} alt="section icon" className="section-icon" />}
    </div>
    {isOpen && (
      <div className="section-content">
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        ))}
      </div>
    )}
  </div>
);

const ServicesCards = () => {

  const [activeSectionId, setActiveSectionId] = useState(Object.keys(sections)[0]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSectionClick = (id) => {
    setActiveSectionId(activeSectionId === id ? null : id)
    setHasInteracted(true);
  }

  useEffect(() => {
    if(hasInteracted) {
      scrollToElement(activeSectionId === null ? Object.keys(sections)[0] : activeSectionId, 50);
    }
  }, [activeSectionId])

  return (
    <div className="services-cards" id="services-cards">
      {Object.entries(sections).map(([id, section]) => (
        <ServicesSection
          key={id}
          id={id}
          icon={section.icon}
          title={section.title}
          rows={section.rows}
          isOpen={activeSectionId === id}
          onClick={() => handleSectionClick(id)}
        />
      ))}
    </div>
  );
};

export default ServicesCards;
