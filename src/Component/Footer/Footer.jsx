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
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src={logo} alt="Quaprix Header Logo" />
          <h3>Require assistance?</h3>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Term and Condition</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
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
        <h4>Contact Us</h4>
        <address>
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
        </address>
      </div>
    </footer>
  );
};
