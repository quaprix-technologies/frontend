import React from "react";
import "./PartnerDetails.css";
import partner_iocn from "../../assets/partner-icon.png";

const PartnerDetails = () => {
  return (
    <div className="partnersdetails">
      <h2>Our Partner </h2>
      <a href="https://www.qualitydynamics.net/" target="_blank">
        <img src={partner_iocn} alt="" className="partner-icon" />
      </a>
    </div>
  );
};

export default PartnerDetails;
