import axios from "axios";
import React, { FC, FormEvent, useState } from "react";
import Form from "../Form";
import getConfig from "../../config.js";
import { constructFormData, getFormReceiverEmail } from "../../utils";
import { CONTACT_FORM } from "../../constants.js";
import { FieldType, FormFieldType } from "../../types";
import "./styles.css";

const ContactForm: FC = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const fields: FormFieldType[] = [
    {
      type: FieldType.TEXT,
      id: "name",
      label: "Your Name",
      placeholder: "Enter your name",
      value: name,
      onChange: (e) => setName(e.target.value),
      required: true,
    },
    {
      type: FieldType.TEL,
      id: "phone",
      label: "Phone",
      placeholder: "Enter your phone number",
      pattern: "[0-9]*",
      value: number,
      onChange: (e) => setNumber(e.target.value),
      required: true,
    },
    {
      type: FieldType.EMAIL,
      id: "email",
      label: "Your Email",
      placeholder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      required: true,
    },
    {
      type: FieldType.TEXT_AREA,
      id: "message",
      label: "Write Your Message Here",
      placeholder: "Enter your message",
      cols: 30,
      rows: 6,
      value: message,
      onChange: (e) => setMessage(e.target.value),
      required: true,
    },
  ];

  const resetForm = () => {
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Query:
        Name: ${name} \n
        Phone: ${number} \n
        Email: ${email} \n
        Message: ${message} \n`;

    const formData = constructFormData({
      to: getFormReceiverEmail(CONTACT_FORM),
      subject: "Query for IT Services",
      text,
    });

    try {
      const contactFormUrl = `${getConfig().baseUrl}/api/contact-form`;
      await axios.post(contactFormUrl, formData);
      resetForm();
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="contact-form">
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default ContactForm;
