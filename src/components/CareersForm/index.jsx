import React, {useRef, useState} from "react";
import axios from "axios";
import Form from "../Form";
import {constructFormData} from "../../utils.js";
import "./styles.css";

const CareerForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const fields = [
    {
      type: 'text',
      id: 'name',
      label: 'Your Name',
      placeholder: 'Enter your name',
      value: name,
      onChange: (e) => setName(e.target.value),
      required: true,
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      pattern:"[0-9]*",
      value: number,
      onChange: (e) => setNumber(e.target.value),
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      label: 'Your Email',
      placeholder: 'Enter your email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      required: true,
    },
    {
      type: 'select',
      id: 'role',
      placeholder: 'Select Role',
      name: 'Role',
      options: [
        {
          label: 'Web Developer',
          value: 'Web Developer',
        },
        {
          label: 'Quality Analyst',
          value: 'Quality Analyst',
        }
      ],
      value: option,
      onChange: (e) => setOption(e.target.value),
      required: true,
    },
    {
      type: 'file',
      id: 'file',
      label: 'Upload Your Resume',
      fileType: '.pdf, .doc, .docx',
      onChange: (e) => setFile(e.target.files[0]),
      ref: fileInputRef,
      required: true,
    },
  ];

  const resetForm = () => {
    setName("");
    setNumber("");
    setEmail("");
    setOption("");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `Query:
        Name: ${name} \n
        Phone: ${number} \n
        Email: ${email} \n
        Service: ${option} \n`;

    const formData = constructFormData({
      to: process.env.REACT_APP_EMAIL_RECEIVER,
      subject: "Job Application",
      text,
      file
    });

    try {
      await axios.post("http://localhost:8080/careers-form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error sending email. Please try again.");
    }
  };

  return (
      <div className="career-form">
        <Form fields={fields} onSubmit={handleSubmit} />
      </div>
  )
};

export default CareerForm;
