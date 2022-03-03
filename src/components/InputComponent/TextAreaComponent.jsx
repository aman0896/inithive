import { ErrorMessage } from "formik";
import React from "react";

function TextAreaComponent({ name, placeholder, setFieldValue, after, label }) {
  const handleChange = (event) => {
    setFieldValue(name, event.target.value);
  };
  return (
    <div className="form-group">
      <label>
        {label}
        {after && <span className="text-danger">{after}</span>}
      </label>
      <textarea
        style={{ height: 100 }}
        className="form-control"
        name={name}
        id="message"
        placeholder={placeholder}
        rows="5"
        data-error="Type your needs"
        onChange={handleChange}
        required
      />
      <div style={{ color: "red" }}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default TextAreaComponent;
