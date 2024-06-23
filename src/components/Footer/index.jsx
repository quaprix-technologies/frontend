import React from "react";
import QuickLinksSection from "../QuickLinksSection";
import FollowUsSection from "../FollowUsSection";
import ContactUsSection from "../ContactUsSection";
import ContactButton from "../ContactButton";
import Copyright from "../Copyright";
import logo from "../../assets/icons/quaprix-header.png";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} className="logo-img" alt="Quaprix Index Logo" />
            <h3>Require assistance?</h3>
            <ContactButton />
          </div>
        </div>
        <QuickLinksSection />
        <FollowUsSection />
        <ContactUsSection />
      </footer>
      <Copyright />
    </div>
  );
};

export default Footer;
