import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails} from '@mui/material';
import {ContentRow, ExpandIcon, SectionHeaderTitle, ServicesSectionHeader} from "./style.js";
import Card from "../../../components/Card";
import {scrollToElementWithTimeout} from "../../../utils.js";
import {sections} from "../services-data.js";
import {SERVICES_CARDS_CONTAINER_ID} from "../../../constants.js";

const ServicesSection = ({ id, title, rows, expanded, onClick }) => (
    <Accordion expanded={expanded} disableGutters={true} onChange={onClick}>
      <ServicesSectionHeader
          expandIcon={<ExpandIcon/>}
          aria-controls={`${id}-content`}
          id={id}
      >
          <SectionHeaderTitle variant="subtitle1">{title}</SectionHeaderTitle>
      </ServicesSectionHeader>
      <AccordionDetails>
        {rows.map((row, index) => (
          <ContentRow key={index}>
            {row.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            ))}
          </ContentRow>
        ))}
      </AccordionDetails>
    </Accordion>
);

const ServicesCards = () => {
  const [activeSectionId, setActiveSectionId] = useState(Object.keys(sections)[0]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSectionClick = (id) => (event, isExpanded) => {
    setActiveSectionId(isExpanded ? id : null);
    setHasInteracted(true);
  }

  useEffect(() => {
    if(hasInteracted) {
        return scrollToElementWithTimeout(activeSectionId === null ? SERVICES_CARDS_CONTAINER_ID : activeSectionId, 400);
    }
  }, [activeSectionId]);

  return (
    <div id={SERVICES_CARDS_CONTAINER_ID}>
      {Object.entries(sections).map(([id, section]) => (
        <ServicesSection
          key={id}
          id={id}
          title={section.title}
          rows={section.rows}
          expanded={activeSectionId === id}
          onClick={handleSectionClick(id)}
        />
      ))}
    </div>
  );
};

export default ServicesCards;
