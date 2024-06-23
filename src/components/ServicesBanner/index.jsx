import React from "react";
import ContactButton from "../ContactButton";
import "./styles.css";

const ServicesBanner = () => {
  return (
    <div className="service-banner">
      <h1>
        Looking for a Partner to Support Your Business Growth or <br /> Monetize
        Your Idea?
      </h1>
      <ContactButton />
    </div>
  );
};

export default ServicesBanner;
