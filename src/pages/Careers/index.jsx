import React, { useEffect } from "react";
import "./Careers.css";

const index = () => {
  useEffect(() => {
    document.title = "careers";
  });
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
    </div>
  );
};

export default index;
