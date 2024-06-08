import React from "react";
import locationIcon from "../../assets/icons/location-icon.png";
import mailIcon from "../../assets/icons/mail-icon.png";
import phoneIcon from "../../assets/icons/phone-icon.png";
import "./styles.css";

const ContactUsSection = () => {
  return (
    <div className="footer-section contact-section">
      <h4>CONTACT US</h4>
      <p>
        <img src={locationIcon} alt="Location" />
        D-A-5, Veer Savarkar Block, Dayanand Colony, Shakarpur, New Delhi,
        Delhi, 110092
      </p>
      <p>
        <img src={mailIcon} alt="Mail" />
        <a href="mailto:info@quaprix.com">info@quaprix.com</a>
      </p>
      <p>
        <img src={phoneIcon} alt="Phone" />
        <a href="tel:+919958413035">+91-9958413035</a>
      </p>
    </div>
  );
};

export default ContactUsSection;
