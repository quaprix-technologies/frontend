import React from "react";
import "./Careers.css";
import Jobs from "../../Component/Jobs/Jobs";
import CareerForm from "../../Component/CareerForm";

const Careers = () => {
  return (
    <div className="career">
      <div className="career-background">
        <div className="career-text">
          <h1>Work At Quaprix</h1>
          <p>
            Learn about what we do and how you can help <br /> us make it
            happen!
          </p>
        </div>
      </div>
      <div className="open-position">
        <h1>Open Positions</h1>
        <h3>
          Take a look at our open positions below to find something that excites
          you.
        </h3>
        <Jobs />
        <h1>Apply Now</h1>
        <CareerForm/>
      </div>
    </div>
  );
};

export default Careers;
