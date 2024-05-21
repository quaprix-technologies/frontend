import React from "react";
import "./Navbar.css";
import Quaprix from "../../assets/quaprix.png";

export const Navbar = () => {
  return (
    <header className="container">
      <img className="logo" src={Quaprix} alt="" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </header>
  );
};
