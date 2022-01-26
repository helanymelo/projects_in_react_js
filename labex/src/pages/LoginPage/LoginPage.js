import React from "react";
import {useForm} from "../../hooks/useForm";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import PageTitle from '../../components/PageTitle/'
import { LoginForm } from "./styles";


const LoginPage =()=>{
    const paperStyle={padding:20, height:'70vh', width:'300px', margin:'50px auto'}
    const avatarStyle={backgroundColor:'#2b34a1'}
    const btnStyle ={margin:'20px auto'}
    const [form, onChangeInput] = useForm({email:" ", password:" "})
    const navigate = useNavigate()


    


    const onSubmitLogin = (event) =>{
        event.preventDefault()
        console.log(form)
        const body = {
            email: form.email,
            password: form.password
            
        }
        
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/login",body)
        .then((res)=>{
            console.log(res.data.token)
            window.localStorage.setItem('token', res.data.token)
            navigate('lista-viagem')
        })
    }
    
    

  
   return(
       <>
        <PageTitle title={'Login'}/>
            <LoginForm>
               <TextField/> 

            </LoginForm>
       </>
    )
}

export default LoginPage;