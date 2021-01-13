import { useState, useEffect } from "react"
import validate from "./validate";


const useForm = (validate) => {
    const [values ,setValues] = useState({
        username:'',
        email:'',
        password: '',
        password2:''
    });

    const [errors , setErrors ] = useState({})

    const HandleChange = e =>{
        const {name , value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const HandleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values))
    };

    return {HandleChange, values , HandleSubmit, errors}  
 }


 export default useForm;