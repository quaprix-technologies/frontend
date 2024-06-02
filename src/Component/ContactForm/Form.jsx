import React from "react";
import "./Form.css";

const Form = () => {
  return (
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
  );
};

export default Form;
