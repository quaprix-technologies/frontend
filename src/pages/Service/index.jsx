import React, { useEffect } from "react";
import "./service.css";

const index = () => {

  useEffect(() => {
    document.title = "Service";
  }, []);

  return (
    <div className="service">
      <div className="text">
        <h1>What We Do</h1>
        <p>
          We offer a comprehensive range of IT services, <br />
          Our services are designed to help small <br />
          businesses thrive in today's digital world.
        </p>
      </div>
    </div>
  );
};

export default index;
