import React from "react";

import Field from "../../../components/Field/Field";
import useForm from "../../../Util/useForm";

import "./Register.scss";

const Register = (props) => {
    
  const { HandleChange, values, HandleSubmit } = useForm();

  return (
    <div className="register--form">
      <button onClick={props.openRegistrModal} className="close-register-form">
        <i className="close-icon"></i>
      </button>
      <h2 className="form--title">Create Account</h2>
      <form className="form--content" onSubmit={HandleSubmit}>
        <div className="form-row">
          <Field
            type="text"
            name="username"
            placeholder="Entry your username..."
            label="Username"
            id="username"
            class={""}
            values={values.username}
            onChange={HandleChange}
          />
        </div>
        <div className="form-row">
          <Field
            type="email"
            name="email"
            placeholder="Entry your email addres..."
            label="Email"
            id="Email"
            values={values.email}
            onChange={HandleChange}
          />
        </div>
        <div className="form-row">
          <Field
            type="password"
            name="password"
            placeholder="Entry your password..."
            label="Password"
            id="password"
            values={values.password}
            onChange={HandleChange}
          />
        </div>
        <div className="form-row">
          <Field
            type="password"
            name="password2"
            placeholder="Reppit your password..."
            label="Confirm password"
            id="confirmPassword"
            values={values.password2}
            onChange={HandleChange}
          />
        </div>

        <div className="btn-content">
          <button className="register--btn">Sing up</button>
        </div>
      </form>
      <div className="login--info">
        Already have an account?
        <button onClick={props.openLoginModal} className="login--link">
          Login now
        </button>
      </div>
    </div>
  );
};

export default Register;
