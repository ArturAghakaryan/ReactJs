import React from "react";

import "./Field.scss";

function Field({
  label,
  id,
  type,
  onChange,
  placeholder,
  name,
  values,
  className,
  error,
}) {
  return (
    <div
      className={`fild--grup ${className ? className : ""}${
        error ? " is-error" : ""
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={values}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </div>
  );
}

export default Field;
