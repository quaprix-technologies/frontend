import { FC } from "react";
import ContactButton from "../ContactButton";
import "./styles.css";

const AboutUsBanner: FC = () => {
  return (
    <div className="about-us-banner">
      <h1>Get In Touch With Us</h1>
      <ContactButton />
    </div>
  );
};

export default AboutUsBanner;
