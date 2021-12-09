import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { LoginForm } from "./styles";


const LoginPage =()=>{
    return(
        <><Typography>LOGIN</Typography>
        <LoginForm>
            <TextField label={'E-mail'} type={'email'}/>
            <TextField label={'Senha'} type={'password'}/>
            <Button type={'submit'} variant={'contained'} color={'primary'}>Acessar</Button>

            
        </LoginForm></>
    )
}

export default LoginPage;