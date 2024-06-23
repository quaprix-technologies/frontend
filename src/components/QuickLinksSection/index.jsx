import React from "react";
import {useNavigate} from "react-router-dom";
import { navigateAndScrollToTop } from "../../utils.js";
import {
  ABOUT_US_PAGE_PATH,
  CAREERS_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  HOME_PAGE_PATH, PRIVACY_POLICY_PAGE_PATH,
  SERVICES_PAGE_PATH, TERMS_AND_CONDITIONS_PAGE_PATH
} from "../../constants.js";
import "./styles.css";

const QuickLinksSection = () => {
  const navigate = useNavigate();

  const handleOnClick = (path) => () => {
    navigateAndScrollToTop(navigate, path);
  }

  const quickLinks = [
    {label: 'Home', path: HOME_PAGE_PATH},
    {label: 'Services', path: SERVICES_PAGE_PATH},
    {label: 'About Us', path: ABOUT_US_PAGE_PATH},
    {label: 'Contact Us', path: CONTACT_US_PAGE_PATH},
    {label: 'Careers', path: CAREERS_PAGE_PATH},
    {label: 'Privacy Policy', path: PRIVACY_POLICY_PAGE_PATH},
    {label: 'Terms and Conditions', path: TERMS_AND_CONDITIONS_PAGE_PATH},
  ]

  return (
    <div className="footer-section quick-links">
      <h4>QUICK LINKS</h4>
      <ul>
        {quickLinks.map((quickLink) => {
          return <li key={quickLink.path}>
              <div onClick={handleOnClick(quickLink.path)}>{quickLink.label}</div>
          </li>
        })}
      </ul>
    </div>
  );
};

export default QuickLinksSection;
