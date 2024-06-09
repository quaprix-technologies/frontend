import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    navigate("/contact-us");
    if (location.pathname === "/contact-us") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/contact-us") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return (
    <div>
      <button className="contact-btn" onClick={handleOnClick}>
        Contact
      </button>
    </div>
  );
};

export default ContactButton;
