import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "../OutsideClickHandler";
import NavbarItem from "./NavbarItem";
import { navigateAndScrollToTop } from "../../utils";
import {
  HOME_PAGE_PATH,
  SERVICES_PAGE_PATH,
  ABOUT_US_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  CAREERS_PAGE_PATH,
} from "../../constants.js";
import quaprix from "../../assets/icons/quaprix.png";
import menu_icon from "../../assets/icons/menu-icon.png";
import "./styles.css";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const handleOnClick = (path) => {
    navigateAndScrollToTop(navigate, path);
    toggleMenu();
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowMobileMenu(false)}>
      <header className="header-container">
        <img
          className="quaprix-logo"
          src={quaprix}
          alt="image not found"
          onClick={() => handleOnClick(HOME_PAGE_PATH)}
        />
        <ul
          className={showMobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}
        >
          <NavbarItem path={HOME_PAGE_PATH} onClick={handleOnClick}>
            Home
          </NavbarItem>
          <NavbarItem path={SERVICES_PAGE_PATH} onClick={handleOnClick}>
            Services
          </NavbarItem>
          <NavbarItem path={ABOUT_US_PAGE_PATH} onClick={handleOnClick}>
            About Us
          </NavbarItem>
          <NavbarItem path={CONTACT_US_PAGE_PATH} onClick={handleOnClick}>
            Contact Us
          </NavbarItem>
          <NavbarItem path={CAREERS_PAGE_PATH} onClick={handleOnClick}>
            Careers
          </NavbarItem>
        </ul>
        <img
          src={menu_icon}
          alt="Menu icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </header>
    </OutsideClickHandler>
  );
};

export default Header;
