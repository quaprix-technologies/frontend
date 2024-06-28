import React from "react";
import quote_left from "../../assets/icons/quote-left.png";
import points from "../../assets/icons/point.png";
import "./styles.css";

const Tagline: React.FC = () => {
  return (
    <div className="tagline">
      <img className="quote" src={quote_left} alt="" />
      <h1>
        Your vision <br />
        Our responsibility
      </h1>
      <img className="points" src={points} alt="" />
    </div>
  );
};

export default Tagline;
