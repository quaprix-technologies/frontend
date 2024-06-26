import styled from "styled-components";
import { AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ServicesSectionHeader = styled(AccordionSummary)`
  && {
    background-color: #073e91;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #052e70;
    }
  }
`;

export const SectionHeaderTitle = styled(Typography)`
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

export const ContentRow = styled.div`
  && {
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 100%;
    margin: 5%;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }
`;
