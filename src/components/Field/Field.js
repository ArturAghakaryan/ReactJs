import React from "react";

import "./Field.scss";


function Field(props){

    if (props.type === "text"){
        return(
            <div className="fild--grup">
                <label for={props.id}>{props.label}</label>
                <input type="text" id={props.id} placeholder={props.placeholder} />
            </div>
        )
    }

    if (props.type === "password"){
        return(
            <div className="fild--grup">
                <label for={props.id}>{props.label}</label>
                <input type="password" id={props.id} placeholder={props.placeholder} />
            </div>
        )
    }



} 

export default Field;