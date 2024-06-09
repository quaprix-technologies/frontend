import React from "react";
import { useNavigate } from "react-router-dom";
import { CONTACT_US_PAGE_PATH } from "../../constants.js";
import { navigateAndScrollToElement } from "../../utils.js";
import "./styles.css";

const ContactButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigateAndScrollToElement(
      navigate,
      CONTACT_US_PAGE_PATH,
      "contact-us-container"
    );
  };

  return (
    <div>
      <button className="contact-btn" onClick={handleOnClick}>
        Contact
      </button>
    </div>
  );
};

export default ContactButton;
