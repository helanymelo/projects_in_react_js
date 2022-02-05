import React from "react";
import {Typography, TextField, Button} from "@material-ui/core"
import {useForm} from "../../hooks/useForm";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { LoginForm } from "./styles";


const LoginPage =()=>{
    const [form, onChangeInput] = useForm({email:" ", password:" "})
    const navigate = useNavigate()

    const onSubmitLogin = (event) =>{
        event.preventDefault()
        console.log(form)
        const body = {
            email: form.email,
            password: form.password
            
        }
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/login", body)
        .then((res)=>{
            
            window.localStorage.setItem('token', res.data.token)
            navigate('/lista-viagem')
        })
    }
    
    

  
   return(
       <div>
           <Typography variant="h4" align={'center'} gutterBottom>Labex</Typography>
            <LoginForm onSubmit={onSubmitLogin}>
                <TextField label={'E-mail'} 
                    type={'email'}>E-mail
                    onChange={onChangeInput}
                    value={form['email']}
                    name={'e-mail'}
                </TextField>

                <TextField label={'Senha'} 
                    type={'password'}>Senha
                    onChange={onChangeInput}
                    value={form['password']}
                    name={'password'}
                </TextField>
                <Button type={'submit'}>Submit</Button>
            </LoginForm>
               
       </div>
    )
}

export default LoginPage;