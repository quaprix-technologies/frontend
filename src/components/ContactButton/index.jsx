import React from "react";
import { useNavigate } from "react-router-dom";
import { navigateAndScrollToElement } from "../../utils.js";
import {CONTACT_US_CONTAINER_ID, CONTACT_US_PAGE_PATH} from "../../constants.js";
import "./styles.css";

const ContactButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigateAndScrollToElement(
        {
          navigate,
          path: CONTACT_US_PAGE_PATH,
          elementId: CONTACT_US_CONTAINER_ID
        }
    );
  };

  return (
      <button className="contact-button" onClick={handleOnClick}>
        Contact
      </button>
  );
};

export default ContactButton;
