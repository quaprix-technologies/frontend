import React from "react";
import partner_icon from "../../assets/icons/partner-icon.png";
import "./styles.css";

const PartnerDetails = () => {
  const handleOnClick = () => {
    window.open("https://www.qualitydynamics.net/", "_blank");
  };

  return (
    <div className="partnersdetails">
      <h2>Our Partner</h2>
      <button className="partner-icon-btn" onClick={handleOnClick}>
        <img src={partner_icon} alt="Partner Icon" className="partner-icon" />
      </button>
    </div>
  );
};

export default PartnerDetails;
