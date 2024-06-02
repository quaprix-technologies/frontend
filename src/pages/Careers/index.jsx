import React, { useEffect } from "react";
import "./Careers.css";

const index = () => {
  useEffect(() => {
    document.title = "careers";
  });

  const jobs = [
    {
      title: "Web Developer",
      description: "Experience 3+ years",
      postType: "Full-time-Contract",
      location: "Remote",
      pdfUrl: "/WEB_DEVELOPER.pdf",
    },
    {
      title: "QA Engineer",
      description: "Experience 3+ years",
      postType: "Full-time-Contract",
      location: "Remote",
      pdfUrl: "/QA.pdf",
    },
  ];

  const downloadJobDescription = (pdfUrl) => {
    try {
      const fullUrl = `${window.location.origin}${pdfUrl}`;
      const a = document.createElement("a");
      a.href = fullUrl;
      a.download = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="career">
      <div className="career-background">
        <div className="career-text">
          <h1>Work At Quaprix</h1>
          <p>
            Learn about what we do and how you can help <br /> us make it
            happen!
          </p>
        </div>
      </div>
      <div className="open-position">
        <h1>Open Positions</h1>
        <h3>
          Take a look at our open positions below to find something that excites
          you.
        </h3>
      </div>
      <div className="jobs">
        {jobs.map((job, index) => (
          <div key={index} className="job-listing">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Post Type: {job.postType}</p>
            <button
              className="apply-button"
              onClick={() => downloadJobDescription(job.pdfUrl)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
