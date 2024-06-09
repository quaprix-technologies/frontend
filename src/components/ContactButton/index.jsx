import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ContactButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/contact-us");
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