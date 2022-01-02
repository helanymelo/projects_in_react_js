import {useState, useEffect} from 'react';
import '../Form.css'


const useForm = validadeInfo =>{
    const[values, setValues]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const[erros, setErros]=useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        setErros(validadeInfo(values))
    }


    return {handleChange, values, handleSubmit, erros}
}

export default useForm;