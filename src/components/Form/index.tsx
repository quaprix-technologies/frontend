import { FC, FormEvent } from "react";
import { FormFieldType, FieldType } from "../../types";
import "./styles.css";

type Props = {
  fields: FormFieldType[];
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form: FC<Props> = ({ fields, onSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => {
          const {
            cols,
            fileType,
            id,
            label,
            name,
            pattern,
            placeholder,
            required,
            ref,
            rows,
            type,
            value,
            onChange,
          } = field;

          return (
            <div className="form-group" key={index}>
              <label htmlFor={id}>{label || name}</label>
              {type === FieldType.TEXT_AREA ? (
                <textarea
                  id={field.id}
                  name={name}
                  value={value}
                  cols={cols}
                  rows={rows}
                  placeholder={placeholder}
                  required={required}
                  onChange={onChange}
                />
              ) : type === FieldType.SELECT ? (
                <select
                  id={id}
                  name={name}
                  value={value}
                  required={required}
                  onChange={onChange}
                >
                  <option value="" disabled>
                    {placeholder}
                  </option>
                  {field.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : type === FieldType.FILE ? (
                <input
                  type={type}
                  id={id}
                  name={name}
                  required={required}
                  accept={fileType}
                  onChange={onChange}
                  ref={ref}
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  pattern={pattern}
                  onChange={onChange}
                  value={value}
                />
              )}
            </div>
          );
        })}
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
