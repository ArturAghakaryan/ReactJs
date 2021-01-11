import React from "react";

import Field from "../../../components/Field/Field";
import useForm from "../../../Util/useForm";
import validate from "../../../Util/validate";

import "./Login.scss";

const Login = (props) => {
  const { HandleChange, values, HandleSubmit, errors } = useForm(validate);

  return (
    <div className="login--form">
      <button onClick={props.openLoginModal} className="close-login-form">
        <i className="close-icon"></i>
      </button>
      <h2 className="form--title">Sing in</h2>
      <form className="form--content" onSubmit={HandleSubmit}>
        <div className="form-row">
          <Field
           type="text"
           name="username"
           placeholder="Entry your username..."
           label="Username"
           id="username"
           className={""}
           values={values.username}
           onChange={HandleChange}
           error={errors.username}
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
            error={errors.password}
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
