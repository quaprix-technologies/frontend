import React from "react";
import "./PartnerDetails.css";
import partner_iocn from "../../assets/partner-icon.png";

const PartnerDetails = () => {
  return (
    <div className="partnersdetails">
      <h2>Our Partner </h2>
      <img src={partner_iocn} alt="" className="partner-icon" />
    </div>
  );
};

export default PartnerDetails;
