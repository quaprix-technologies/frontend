import React, { useEffect } from "react";
import Contact from "../../components/Contact_Footer/Contact"
import backgroundImg from "../../assets/ContactUs.png";
import ContactForm from "../../components/ContactForm";
import msgIcon from "../../assets/msg-icon.png";
import "./styles.css";

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
          <p>We&apos;d love to hear from you</p>
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
        <div className="contact-col">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
