import React from "react";
import "./styles.css";
import Jobs from "../../components/Jobs";
import CareerForm from "../../components/CareersForm";

const Careers = () => {
  return (
    <div className="career-section">
      <div className="career-banner">
        <div className="career-banner-text">
          <h1>Work At Quaprix</h1>
          <p>
            Learn about what we do and how you can help <br /> us make it
            happen!
          </p>
        </div>
      </div>
      <div className="open-positions">
        <h1>Open Positions</h1>
        <h3>
          Take a look at our open positions below to find something that excites
          you.
        </h3>
        <Jobs />
        <h1>Join Our Team</h1>
        <CareerForm />
      </div>
    </div>
  );
};

export default Careers;
