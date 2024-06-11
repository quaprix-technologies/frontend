import React from "react";
import "./style.css";

const Card = ({ icon, title, content, linkLable, onLinkClick }) => {
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
      {linkLable ? (
        <div className="card-linklable" onClick={onLinkClick}>
          {linkLable}
        </div>
      ): null}
    </div>
  );
};

export default Card;
