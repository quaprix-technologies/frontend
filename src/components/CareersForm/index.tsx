import { FC, FormEvent, useRef, useState } from "react";
import axios from "axios";
import Form from "../Form";
import getConfig from "../../config.js";
import { constructFormData, getFormReceiverEmail } from "../../utils";
import { CAREERS_FORM } from "../../constants.js";
import { FieldType, FormFieldType } from "../../types";
import "./styles.css";

const CareerForm: FC = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");
  const [file, setFile] = useState<null | File>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formFields: FormFieldType[] = [
    {
      id: "name",
      label: "Your Name",
      placeholder: "Enter your name",
      required: true,
      type: FieldType.TEXT,
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      id: "phone",
      label: "Phone",
      pattern: "[0-9]*",
      placeholder: "Enter your phone number",
      required: true,
      type: FieldType.TEL,
      value: number,
      onChange: (e) => setNumber(e.target.value),
    },
    {
      id: "email",
      label: "Your Email",
      placeholder: "Enter your email",
      required: true,
      type: FieldType.EMAIL,
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      id: "role",
      name: "Role",
      options: [
        {
          label: "Web Developer",
          value: "Web Developer",
        },
        {
          label: "Quality Analyst",
          value: "Quality Analyst",
        },
      ],
      placeholder: "Select Role",
      required: true,
      type: FieldType.SELECT,
      value: option,
      onChange: (e) => setOption(e.target.value),
    },
    {
      fileType: ".pdf, .doc, .docx",
      id: "file",
      label: "Upload Your Resume",
      ref: fileInputRef,
      required: true,
      type: FieldType.FILE,
      onChange: (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      },
    },
  ];

  const resetForm = () => {
    setName("");
    setNumber("");
    setEmail("");
    setOption("");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Query:
        Name: ${name} \n
        Phone: ${number} \n
        Email: ${email} \n
        Service: ${option} \n`;

    const formData = constructFormData({
      to: getFormReceiverEmail(CAREERS_FORM),
      subject: "Job Application",
      text,
      file,
    });

    try {
      const careersFormUrl = `${getConfig().baseUrl}/api/careers-form`;
      await axios.post(careersFormUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="career-form">
      <Form fields={formFields} onSubmit={handleSubmit} />
    </div>
  );
};

export default CareerForm;
