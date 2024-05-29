import React from "react";
import "./Footer.css";
import logo from "../../assets/quaprix_header.png";
import mailIcon from "../../assets/mail-icon.png";
import locationIcon from "../../assets/location-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instaIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

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
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/term-condition">Term and Condition</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <ul className="social-icons">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fbIcon} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
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
