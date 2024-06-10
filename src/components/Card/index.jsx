import React from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES_PAGE_PATH } from "../../constants.js";
import "./style.css";

const Card = ({ icon, title, content, url }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(SERVICES_PAGE_PATH);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon-container">
          {icon && <img src={icon} alt="icon" className="card-icon" />}
        </div>
        <div className="card-title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-url" onClick={handleOnClick}>
        {url}
      </div>
    </div>
  );
};

export default Card;
