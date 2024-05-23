import React, { useState, useEffect } from "react";
import "./Navbar.css";
import quaprix from "../../assets/quaprix.png";
import menu_icon from "../../assets/menu.png";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-navbar" : ""}`}>
      <img className="logo" src={quaprix} alt="Image not found" />
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li className="active">
          <a href="#Home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#Service" onClick={toggleMenu}>
            services
          </a>
        </li>
        <li>
          <a href="#AboutUs" onClick={toggleMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="#ContactUS" onClick={toggleMenu}>
            Contact Us
          </a>
        </li>
        <li></li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};
