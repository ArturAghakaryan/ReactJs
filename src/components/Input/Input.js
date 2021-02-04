import React from "react";

import "./Input.scss";

const Input = ({type ,className = "" ,placeholder ,inputRef ="", error = false}) => {
  return (
    <input className={`input-field ${className}${error ? " is-error": "" } `} type={type} placeholder={placeholder} ref={inputRef}/>
  );
};

export default Input;
