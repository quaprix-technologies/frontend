import GenericForm from "../GenericForm/index.jsx";
import "./styles.css";

const ContactForm = () => {
  const fields = [
    {
      type: 'text',
      id: 'name',
      label: 'Your Name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      type: 'tel',
      id: 'phone',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      pattern:"[0-9]*",
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      label: 'Your Email',
      placeholder: 'Enter your email',
      required: true,
    },
    {
      type: 'textarea',
      id: 'message',
      label: 'Write Your Message Here',
      placeholder: 'Enter your message',
      required: true,
      cols: 30,
      rows: 6,
    },
  ];

  return (
    <div className="contact-form">
      <GenericForm fields={fields} onSubmit={(e) => e.preventDefault()} />
    </div>
  );
};

export default ContactForm;
