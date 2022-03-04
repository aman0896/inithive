import React from "react";
import "./Button.css";

function ButtonComponent({ label, type, onClick }) {
  return (
    <div className="submit-button">
      <button
        className="btn btn-common"
        id="form-submit"
        type={type}
        onClick={onClick}
      >
        <span className="submitting d-none">
          <i className="fa fa-spinner fa-spin"></i>
        </span>
        {label}
      </button>
    </div>
  );
}

export default ButtonComponent;

export function ButtonComponentNew({ children, type, onClick }) {
  return (
    <div>
      <button className="btn btn-common" type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
