import React from "react";

const FormField = ({
  id,
  label,
  type = "text",
  onChange,
  placeholder,
  as = "input",
  value,
  options = [],
}: FormFieldProps) => {
  const InputToRender = ({ type }: { type: string }) => {
    if (type === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    } else if (type === "select") {
      return (
        <select id={id} name={id} value={value} onChange={onChange}>
          {options.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    }
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <InputToRender type={as} />
    </div>
  );
};

export default FormField;
