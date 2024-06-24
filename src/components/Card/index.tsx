import React from "react";
import "./style.css";

type Props = {
  icon: string;
  title: string;
  content: string;
  link: {
    label: string;
    url: string;
    elementId: string;
  };
  onLinkClick: (url: string, elementId: string) => void;
}

const Card: React.FC<Props> = ({ icon, title, content, link, onLinkClick }) => {
  const handleLinkClick = () => {
    onLinkClick(link.url, link.elementId);
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
      {link && (
        <div className="card-link-label" onClick={handleLinkClick}>
          {link.label}
        </div>
      )}
    </div>
  );
};

export default Card;
