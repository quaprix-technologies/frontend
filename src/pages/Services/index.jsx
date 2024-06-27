import React, { useEffect } from "react";
import ServicesBanner from "../../components/ServicesBanner";
import ServiceCards from "./Cards";
import "./styles.css";

const Services = () => {
  useEffect(() => {
    document.title = "Service";
  }, []);

  return (
    <div>
      <div className="service" id="services">
        <div className="text">
          <h1>What We Do</h1>
          <p>
            We offer a comprehensive range of IT services, <br />
            Our services are designed to help small <br />
            businesses thrive in today&apos;s digital world.
          </p>
        </div>
      </div>
      <ServiceCards />
      <ServicesBanner />
    </div>
  );
};

export default Services;
