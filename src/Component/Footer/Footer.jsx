import React from "react";
import "./Footer.css";
import logo from "../../assets/quaprix_header.png";
import Button from "../ContactUsBtn/Button"
import FollowUs from "../FollowUs/FollowUs";
import Contact from "../Contact_Footer/Contact";
import QuickLink from "../QuickLink/QuickLink";
import CopyRight from "../CopyRight/CopyRight";

export const Footer = () => {
  return (
    <div>
      <footer className="footer container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} className="logo-img" alt="Quaprix Header Logo" />
            <h3>Require assistance?</h3>
            <Button/>
          </div>
        </div>
        <QuickLink />
        <FollowUs />
        <Contact />
      </footer>
      <CopyRight/>
    </div>
  );
};
