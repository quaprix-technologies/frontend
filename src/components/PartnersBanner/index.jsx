import React from "react";
import { QUALITY_DYNAMICS_URL } from "../../constants.js";
import partner_icon from "../../assets/icons/partner-icon.png";
import "./styles.css";

const PartnersBanner = () => {
  const handleOnClick = () => {
    window.open(QUALITY_DYNAMICS_URL, "_blank");
  };

  return (
    <div className="partners-banner">
      <h1>Our Partner</h1>
      <img
        src={partner_icon}
        alt="Partner Icon"
        className="partner-icon"
        onClick={handleOnClick}
      />
    </div>
  );
};

export default PartnersBanner;
