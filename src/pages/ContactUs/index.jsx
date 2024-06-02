import React, { useEffect } from "react";
import "./ContactUs.css";
import Contact from "../../Component/Contact_Footer/Contact"
import msgIcon from "../../assets/msg-icon.png";
import backgroundImg from "../../assets/ContactUs.png";
import Form from "../../Component/ContactForm/Form";

const ContactUs = () => {

  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div>
      <div className="hero-section">
        <img src={backgroundImg} alt="Contact Us Background" />
        <div className="hero-text">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msgIcon} alt="Message Icon" />
          </h3>
          <p>
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <Contact/>
        </div>
        <Form/>
      </div>
    </div>
  );
};

export default ContactUs;
