import styled from "styled-components";
import { AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ServiceSectionHeader = styled(AccordionSummary)`
  && {
    background-color: ${props => props.theme.colors.darkBlue};
    transition: background-color 0.5s ease;

    &:hover {
      background-color: ${props => props.theme.colors.blue3};
    }
  }
`;

export const ServiceSectionTitle = styled(Typography)`
  && {
    font-weight: 700;
    color: ${props => props.theme.colors.white};
  }
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  && {
    color: ${props => props.theme.colors.white};
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
