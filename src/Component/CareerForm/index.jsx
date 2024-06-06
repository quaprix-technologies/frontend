import React, { useState } from "react";
import "./CareerForm.css";
import axios from "axios";

const CareerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState(null);
  const [option, setOption] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setFile(null);
    setOption("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailBody = `Query:
        Name: ${firstName + " " + lastName} \n
        Phone: ${number} \n
        Service: ${option} \n
        Email: ${email} \n`;

    const formData = new FormData();
    formData.append("to", "harshitverma2103@gmail.com");
    formData.append("subject", "Query for IT services");
    formData.append("text", mailBody);
    if (file) {
      formData.append("file", file);
    }

    try {
      await axios.post("http://localhost:8080/send-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="form-wrapper container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="input-group">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label>First Name</label>
            <div className="underline"></div>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label>Last Name</label>
            <div className="underline"></div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
            <div className="underline"></div>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <label>Phone Number</label>
            <div className="underline"></div>
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="underline"></div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              required
            >
              <option value="" disabled>
                Open Positions
              </option>
              <option value="Web Developer">Web Developer</option>
              <option value="Quality Analyst (QA)">Quality Analyst (QA)</option>
            </select>
            <div className="underline"></div>
          </div>
        </div>
        <div className="form-row">
          <div className="submit-btn">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
