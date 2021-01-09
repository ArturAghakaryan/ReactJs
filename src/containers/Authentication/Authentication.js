import React, { useState } from "react"

import "./Authentication.scss"


const Authentication = (props) => {
    return(
        <div className="authentication-modal">
            <div className={`login-modal${props.isOpenLogin ? " show" : ""}`}>
                isOpenLogin
            </div>
            <div className={`registr-modal${props.isOpenRegistr ? " show" : ""}`}>
                isOpenRegistr
            </div>
        </div>
    )
}


export default Authentication ;