import React from "react";
import "./styles.css";

const NavbarItem = ({ path, onClick, children }) => {
  const isCurrentPage = (path) => {
    return window.location.pathname === path;
  };

  const handleOnClick = () => {
    onClick(path);
  };

  return (
    <li className={`navbar-item ${isCurrentPage(path) ? "active" : ""}`}>
      <div onClick={handleOnClick}>{children}</div>
    </li>
  );
};

export default NavbarItem;
