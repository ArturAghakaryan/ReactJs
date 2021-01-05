import React, { useState } from "react";
import "./Authentication.scss";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";



function Authentication() {

    const [isLogin , changeViews] = useState(true)

    const changeViewsLogin = () => {
        changeViews(true)
    }
    const changeViewsRegister = () => {
        changeViews(false)
    }
    
    return (
        <div className="authentication">
            <div className="container">
                <div className="form-container">
                    {isLogin && <Login changeViews={changeViewsRegister} /> }
                    {!isLogin && <Register changeViews={changeViewsLogin} /> }
                </div>
            </div>
        </div>
    )
    

}


export default Authentication;