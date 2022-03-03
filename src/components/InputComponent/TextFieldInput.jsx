import React from "react";
import "./Input.css";
import { ErrorMessage } from "formik";

function TextFieldInput({
  label,
  type,
  name,
  after,
  setFieldValue,
  placeholder,
}) {
  const onChangeText = (e) => {
    setFieldValue(name, e.target.value);
  };
  return (
    <div className="form-group">
      <label>
        {label} {after && <span className="text-danger">{after}</span>}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChangeText}
      />
      <div style={{ color: "red" }}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default TextFieldInput;
