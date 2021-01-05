import React from "react";

import "./Register.scss";

import Field from "../Field/Field";

function Register(props){
    return (
        <div className="register--form">
            <h2 className="form--title">Register</h2>
            <form className="form--content">
                <div className="form-row">
                    <Field type="text" placeholder="Entry your username..." label="Username" id="username"/>
                </div>
                <div className="form-row">
                    <Field type="password" placeholder="Entry your password..." label="Password" id="Password"/>
                </div>

                <div className="btn-content">
                    <button className="login--btn">Signup</button>
                </div>
            </form>
            <div className="login--info">
                <button onClick={props.changeViews} className="login--link">asdaasd</button>
            </div>
        </div>
    )
} 

export default Register;