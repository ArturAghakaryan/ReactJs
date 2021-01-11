import { useState, useEffect } from "react"


const useForm = () => {
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
    };

    return {HandleChange, values , HandleSubmit}  
 }


 export default useForm;