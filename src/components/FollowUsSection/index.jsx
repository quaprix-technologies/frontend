import React from "react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
  LINKEDIN_URL,
} from "../../constants";
import fbIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import instaIcon from "../../assets/icons/instagram.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import "./styles.css";

const FollowUsSection = () => {
  const handleOnClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer-section follow-us">
      <h4>FOLLOW US</h4>
      <ul className="social-icons">
        <li>
          <img
            src={fbIcon}
            alt="Facebook"
            onClick={() => handleOnClick(FACEBOOK_URL)}
          />
        </li>
        <li>
          <img
            src={twitterIcon}
            alt="Twitter"
            onClick={() => handleOnClick(TWITTER_URL)}
          />
        </li>
        <li>
          <img
            src={instaIcon}
            alt="Instagram"
            onClick={() => handleOnClick(INSTAGRAM_URL)}
          />
        </li>
        <li>
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            onClick={() => handleOnClick(LINKEDIN_URL)}
          />
        </li>
      </ul>
    </div>
  );
};

export default FollowUsSection;
