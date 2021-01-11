import React from "react";

import "./Field.scss";

function Field(props) {
  return (
    <div className={`fild--grup  ${props.class}`}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        value={props.values}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Field;
