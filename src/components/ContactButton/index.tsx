import React from "react";
import { useNavigate } from "react-router-dom";
import { navigateAndScrollToElement } from "../../utils";
import { CONTACT_US_CONTAINER_ID, CONTACT_US_PAGE_PATH } from "../../constants";
import "./styles.css";

const ContactButton: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigateAndScrollToElement({
      navigate,
      path: CONTACT_US_PAGE_PATH,
      elementId: CONTACT_US_CONTAINER_ID,
    });
  };

  return (
    <button className="contact-button" onClick={handleOnClick}>
      Contact
    </button>
  );
};

export default ContactButton;
