import React from "react";
import "./ContactUs.css";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import backgroundImg from "../../assets/ContactUs.png";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
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
          <ul>
            <li key="email">
              <img src={mailIcon} alt="Mail Icon" />
              info@quaprix.com
            </li>
            <li key="phone">
              <img src={phoneIcon} alt="Phone Icon" />
              +91-9958413035
            </li>
            <li key="address">
              <img src={locationIcon} alt="Location Icon" />
              D-A-5, Veer Savarkar Block,
              <br /> Dayanand Colony, Shakarpur,
              <br /> New Delhi, Delhi, 110092
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message">Write Your Message Here</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
