import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails } from "@mui/material";
import {
  ServiceContentRow,
  ExpandIcon,
  ServiceSectionTitle,
  ServiceSectionHeader,
  ServiceCardWrapper,
} from "./style.ts";
import Card from "../../../components/Card";
import { scrollToElementWithTimeout } from "../../../utils";
import { serviceSections } from "../services-data.js";
import { SERVICE_CARDS_CONTAINER_ID } from "../../../constants.js";

const ServiceSection = ({ id, title, rows, expanded, onClick }) => (
  <Accordion expanded={expanded} disableGutters={true} onChange={onClick}>
    <ServiceSectionHeader
      expandIcon={<ExpandIcon />}
      aria-controls={`${id}-content`}
      id={id}
    >
      <ServiceSectionTitle variant="subtitle1">{title}</ServiceSectionTitle>
    </ServiceSectionHeader>
    <AccordionDetails>
      {rows.map((row, index) => (
        <ServiceContentRow key={index}>
          {row.map((card, cardIndex) => (
            <ServiceCardWrapper key={cardIndex}>
              <Card
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
            </ServiceCardWrapper>
          ))}
        </ServiceContentRow>
      ))}
    </AccordionDetails>
  </Accordion>
);

const ServiceCards = () => {
  const [activeSectionId, setActiveSectionId] = useState(
    Object.keys(serviceSections)[0],
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSectionClick = (id) => (_event, isExpanded) => {
    setActiveSectionId(isExpanded ? id : null);
    setHasInteracted(true);
  };

  useEffect(() => {
    if (hasInteracted) {
      return scrollToElementWithTimeout(
        activeSectionId === null ? SERVICE_CARDS_CONTAINER_ID : activeSectionId,
        400,
      );
    }
  }, [activeSectionId, hasInteracted]);

  return (
    <div id={SERVICE_CARDS_CONTAINER_ID}>
      {Object.entries(serviceSections).map(([id, section]) => (
        <ServiceSection
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

export default ServiceCards;
