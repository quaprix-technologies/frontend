import { FC } from "react";
import quote_left from "../../assets/icons/quote-left.png";
import points from "../../assets/icons/point.png";
import "./styles.css";

const Tagline: FC = () => {
  return (
    <div className="tagline">
      <img className="quote" src={quote_left} alt="Left quotation mark" />
      <h1>
        Your vision <br />
        Our responsibility
      </h1>
      <img className="points" src={points} alt="Decorative points" />
    </div>
  );
};

export default Tagline;
