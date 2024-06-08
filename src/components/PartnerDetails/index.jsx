import React from "react";
import partner_icon from "../../assets/icons/partner-icon.png";
import "./styles.css";

const PartnerDetails = () => {
  return (
    <div className="partnersdetails">
      <h2>Our Partner </h2>
      <a href="https://www.qualitydynamics.net/" target="_blank">
        <img src={partner_icon} alt="" className="partner-icon" />
      </a>
    </div>
  );
};

export default PartnerDetails;
