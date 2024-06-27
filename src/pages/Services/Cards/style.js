import styled from "styled-components";
import { AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ServiceSectionHeader = styled(AccordionSummary)`
  && {
    background-color: #073e91;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #052e70;
    }
  }
`;

export const ServiceSectionTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: white;
  }
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  && {
    color: white;
  }
`;

export const ServiceContentRow = styled.div`
  && {
    display: flex;
    justify-content: center;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }
`;

export const ServiceCardWrapper = styled.div`
  && {
    width: calc(33%);
    padding: 10px;

    @media screen and (max-width: 1100px) {
    width: 100%;
    }
  }
`;
