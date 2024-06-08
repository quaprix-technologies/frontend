import React from "react";
import "./styles.css";

const QuickLinksSection = () => {
  return (
    <div className="footer-section quick-links">
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
  );
};

export default QuickLinksSection;
