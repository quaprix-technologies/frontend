import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Quaprix from "../../assets/quaprix.png";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false); 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 200 ? setSticky(true) : setSticky(false);
      });
    };
  }, []); 

  return (
    <header className={`container ${sticky ? "dark-navbar" : ""}`}>
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
