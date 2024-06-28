import React from "react";
import "./style.scss";

type Props = {
  icon?: string;
  title: string;
  content: string;
  link?: {
    label: string;
    url: string;
    elementId: string;
  };
  onLinkClick?: (url: string, elementId: string) => void;
};

const Card: React.FC<Props> = ({ icon, title, content, link, onLinkClick }) => {
  const handleLinkClick = () => {
    if (link && onLinkClick) {
      onLinkClick(link.url, link.elementId);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        {icon && <img src={icon} alt="icon" className="card-icon" />}
        <div className="card-title">{title}</div>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {link && (
          <div className="card-link-label" onClick={handleLinkClick}>
            {link.label}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
