import React from "react";
import "./FollowUs.css";
import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instaIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

const FollowUs = () => {
  return (
    <div className="footer-section follow-us">
      <h4>FOLLOW US</h4>
      <ul className="social-icons">
        <li>
          <a  
            href="https://www.facebook.com/profile.php?id=61559163870823"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fbIcon} alt="Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Quaprix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/quaprix_tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/quaprix-technologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FollowUs;
