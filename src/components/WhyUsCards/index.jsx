import React from "react";
import Card from "../Card";
import ContactButton from "../ContactButton";
import teams from "../../assets/icons/group.png";
import mortarboard from "../../assets/icons/mortarboard.png";
import tech from "../../assets/icons/coding.png";
import "./styles.css";

const WhyUsCards = () => {
  return (
    <div className="why-us-card-container">
      <Card
        icon={teams}
        title="Our Story"
        content="We started as a small team of IT enthusiasts who wanted to help small businesses overcome their technology challenges. Today, we have grown into a leading provider of IT services."
      />
      <Card
        icon={mortarboard}
        title="Our Mission"
        content="To revolutionize the IT industry by pushing the boundaries of innovation. We strive to be at the forefront of technological advancement, continuously pioneering new solutions that empower businesses and individuals to thrive in a rapidly evolving digital landscape."
      />
      <Card
        icon={tech}
        title="Technologies"
        content="We offer a comprehensive range of IT services. Our services are designed to help small businesses thrive in today's digital world."
        url="Learn More"
      />
      <div className="why-us-card-button">
        <ContactButton />
      </div>
    </div>
  );
};

export default WhyUsCards;
