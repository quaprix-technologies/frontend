import React from "react";
import "./Footer.css";
import logo from "../../assets/quaprix_header.png";
import FollowUs from "../FollowUs/FollowUs";
import Contact from "../Contact/Contact";
import QuickLink from "../QuickLink/QuickLink";

export const Footer = () => {
  return (
    <div>
      <footer className="footer container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} className="logo-img" alt="Quaprix Header Logo" />
            <h3>Require assistance?</h3>
            <a href="/contact-us">
              <button className="contact-button">Contact Us</button>
            </a>
          </div>
        </div>
        <QuickLink />
        <FollowUs />
        <Contact />
      </footer>
      <div className="copyright-footer">
        <hr />
        <h2 className="copyright-msg">
          Copyright © 2024 Quaprix Technologies - All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};
