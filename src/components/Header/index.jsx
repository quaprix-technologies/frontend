import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import NavbarItem from "./NavbarItem";
import {HOME_PAGE_PATH, SERVICES_PAGE_PATH, ABOUT_US_PAGE_PATH, CONTACT_US_PAGE_PATH, CAREERS_PAGE_PATH} from "../../constants.js";
import quaprix from "../../assets/icons/quaprix.png";
import menu_icon from "../../assets/icons/menu-icon.png";
import "./styles.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const handleOnClick = (path) => {
    toggleMenu();
    navigate(path);
  };

  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (mobileMenu && !event.target.closest(".header-container")) {
        setMobileMenu(false);
      }
    };

    if (mobileMenu) {
      document.addEventListener("click", outsideClickHandler);
    } else {
      document.removeEventListener("click", outsideClickHandler);
    }
  }, [mobileMenu]);

  return (
      <header className="header-container">
          <img className="quaprix-logo" src={quaprix} alt="image not found" onClick={() => handleOnClick(HOME_PAGE_PATH)}/>
          <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
              <NavbarItem path={HOME_PAGE_PATH} onClick={handleOnClick}>Home</NavbarItem>
              <NavbarItem path={SERVICES_PAGE_PATH} onClick={handleOnClick}>Services</NavbarItem>
              <NavbarItem path={ABOUT_US_PAGE_PATH} onClick={handleOnClick}>About Us</NavbarItem>
              <NavbarItem path={CONTACT_US_PAGE_PATH} onClick={handleOnClick}>Contact Us</NavbarItem>
              <NavbarItem path={CAREERS_PAGE_PATH} onClick={handleOnClick}>Careers</NavbarItem>
          </ul>
          <img src={menu_icon} alt="Menu icon" className="menu-icon" onClick={toggleMenu}/>
      </header>
  );
};

export default Header;
