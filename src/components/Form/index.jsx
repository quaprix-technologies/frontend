import React from "react";
import "./styles.css";

const Form = ({ method, fields, onSubmit }) => {
  return (
    <div className="form-container">
      <form method={method} onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={field.id}>{field.label || field.name}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.name}
                value={field.value}
                cols={field.cols}
                rows={field.rows}
                placeholder={field.placeholder}
                required={field.required}
                onChange={field.onChange}
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                name={field.name}
                value={field.value}
                required={field.required}
                onChange={field.onChange}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                required={field.required}
                accept={field.accept}
                onChange={field.onChange}
                ref={field.ref}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                pattern={field.pattern}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          </div>
        ))}
        <div className="form-group">
          <button type="submit" className="submit-button dark-btn">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
