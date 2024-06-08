import React from "react";
import "./Tagline.css";
import quote_left from "../../assets/quote-left.png";
import points from "../../assets/point.png";

export const Tagline = () => {
  return (
    <div className="tagline">
      <img className="quote" src={quote_left} alt="" />
      <h1>
        Your vision <br />
        Our responsibility
      </h1>
      <img className="points" src={points} alt="" />
      <h1>Why us?</h1>
    </div>
  );
};
