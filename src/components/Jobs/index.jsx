import React, { useEffect } from "react";
import "./styles.css";

const Jobs = () => {
  useEffect(() => {
    document.title = "Careers";
  }, []);

  const jobs = [
    {
      title: "Web Developer",
      description: "Experience: 3+ years",
      postType: "Full-time Contract",
      location: "Remote",
      pdfUrl: "/WEB_DEVELOPER.pdf",
    },
    {
      title: "QA Engineer",
      description: "Experience: 3+ years",
      postType: "Full-time Contract",
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

  const JobList = () => {
    return (
      <div className="jobs">
        {jobs.map((job, index) => (
          <div key={index} className="job-listing">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Post Type: {job.postType}</p>
            <button
              className="details-button"
              onClick={() => downloadJobDescription(job.pdfUrl)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
    );
  };

  return <JobList />;
};

export default Jobs;
