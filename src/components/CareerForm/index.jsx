import React, {useRef, useState} from "react";
import axios from "axios";
import GenericForm from "../GenericForm/index.jsx";
import "./styles.css";

const CareerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
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
      onChange: setName,
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      label: 'Your Email',
      placeholder: 'Enter your email',
      value: email,
      onChange: setEmail,
      required: true,
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      pattern:"[0-9]*",
      value: number,
      onChange: setNumber,
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
      onChange: setOption,
      required: true,
    },
    {
      type: 'file',
      id: 'file',
      label: 'Upload Your Resume',
      fileType: '.pdf, .doc, .docx',
      onChange: setFile,
      ref: fileInputRef,
      required: true,
    },
  ];

  const resetForm = () => {
    setName("");
    setEmail("");
    setNumber("");
    setOption("");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailBody = `Query:
        Name: ${name} \n
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
      })
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
      <div className="career-form">
        <GenericForm fields={fields} onSubmit={handleSubmit} />
      </div>
  )
};

export default CareerForm;
