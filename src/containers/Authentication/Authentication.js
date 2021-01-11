import React from "react"

import "./Authentication.scss"

import  Login  from  '../Login/Login';
import  Register  from  '../Register/Register';


const Authentication = (props) => {
    return(
        <div className="authentication-modal">
            <div className={`login-modal${props.isOpenLogin ? "" : " is-hidden"}`}>
                <Login openLoginModal={props.openLoginModal}  openRegistrModal={props.openRegistrModal} />
            </div>
            <div className={`registr-modal${props.isOpenRegistr ? "" : " is-hidden"}`}>
                <Register openLoginModal={props.openLoginModal}  openRegistrModal={props.openRegistrModal} />
            </div>
        </div>
    )
}


export default Authentication ;