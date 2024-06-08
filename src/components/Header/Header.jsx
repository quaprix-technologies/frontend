import React, { useState } from "react";
import "./Header.css";
import quaprix from "../../assets/quaprix.png";
import menu_icon from "../../assets/menu.png";

export const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  return (
    <header className="container">
      <a href="/">
      <img className="logo"  src={quaprix} alt="Image not found" />
      </a>
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li className="active">
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/services" onClick={toggleMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="/about-us" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="/contact-us" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="/careers" onClick={toggleMenu}>
            Careers
          </a>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </header>
  );
};
