import React, { useEffect } from "react";
import "./service.css";
import Cards from "./Cards/Cards";

const index = () => {
  useEffect(() => {
    document.title = "Service";
  }, []);

  return (
    <>
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
      <Cards />
      <div className="service-banner">
        <h1>
          Looking for a Partner to Support Your Business Growth or <br />{" "}
          Monetize Your Idea?
        </h1>
        <button className="contact-btn">
          <a href="/contact-us">Contact</a>
        </button>
      </div>
    </>
  );
};

export default index;
