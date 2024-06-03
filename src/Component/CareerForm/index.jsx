import React from "react";
import "./CareerForm.css";

const CareerForm = () => {
  return (
    <div className="center-wrapper">
      <div className="form-container">
        <form
          action="/submit_application"
          method="post"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name*"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email*"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Phone No.*"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select id="position" name="position" required>
              <option value="">Role*</option>
              <option value="software_developer">Software Developer</option>
              <option value="QA">Quality Analyst</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume (PDF only)</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept="application/pdf"
              required
            />
            <p>
              Max file size (Mb): 2 <br />
              Max number of files: 1
            </p>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
