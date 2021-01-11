import React from "react";

import Field from "../../../components/Field/Field";

import "./Login.scss";

const Login = (props) => {
  return (
    <div className="login--form">
      <button onClick={props.openLoginModal} className="close-login-form">
        <i className="close-icon"></i>
      </button>
      <h2 className="form--title">Sing in</h2>
      <form className="form--content">
        <div className="form-row">
          <Field
            type="text"
            placeholder="Entry your username..."
            label="Username"
            id="username"
            class={""}
          />
        </div>
        <div className="form-row">
          <Field
            type="password"
            placeholder="Entry your password..."
            label="Password"
            id="password"
          />
        </div>

        <div className="btn-content">
          <button className="login--btn">Sing in</button>
        </div>
      </form>
      <div className="registration--info">
        not registered?
        <button onClick={props.openRegistrModal} className="registration--link">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Login;
