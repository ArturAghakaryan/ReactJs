import React from "react";

import "./Login.scss";

import Field from "../Field/Field";


function Login(props){
    return (
        <div className="login--form">
            <h2 className="form--title">Login</h2>
            <form className="form--content">
                <div className="form-row">
                    <Field type="text" placeholder="Entry your username..." label="Username" id="username"/>
                </div>
                <div className="form-row">
                    <Field type="password" placeholder="Entry your password..." label="Password" id="Password"/>
                </div>

                <div className="btn-content">
                    <button className="login--btn">Login</button>
                </div>
            </form>
            <div className="registration--info">
                 not registered? <button onClick={props.changeViews} className="registration--link">Create an account</button>
            </div>
        </div>
    )
} 

export default Login;