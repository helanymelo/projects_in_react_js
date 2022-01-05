import { Button, TextField, Grid, Paper, Avatar} from "@material-ui/core";
import React from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import {useForm} from "../../hooks/useForm";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


const LoginPage =()=>{
    const paperStyle={padding:20, height:'70vh', width:'300px', margin:'50px auto'}
    const avatarStyle={backgroundColor:'#2b34a1'}
    const btnStyle ={margin:'20px auto'}
    const [form, onChangeInput] = useForm({email:" ", password:" "})
    const navigate = useNavigate()


    const onSubmitLogin = (event) =>{
        event.preventDefault()
        
        const body = {
            email: form.email,
            paassword: form.password
        }
        console.log(form)
       
        
        

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/login", body)
        .then((res)=>{
            console.log(res.data.token)
            window.localStorage.setItem('token', res.data.token)
            navigate('/lista-viagem')
        })
    }
    
    

  
   return(
        
        <Grid >
            <Paper elevation={10} style={paperStyle} onSubmit={onSubmitLogin}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockRoundedIcon/></Avatar>
                    <h3>Sign In</h3>
                </Grid>
                <TextField label={"email"} 
                    type={"email"}
                    onChange={onChangeInput}
                    value={form["email"]}
                    name={"email"}
                    fullWidth />

                <TextField label={"password"} 
                    type={"password"}
                    onChange={onChangeInput}
                    value={form["password"]}
                    name={"password"}
                    fullWidth/>
                    
                <Grid>  
                    <Button 
                        type={"submit"}
                        color={"primary"} 
                        variant={"contained"} 
                        fullWidth 
                        style={btnStyle}>
                        Acessar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
        
       
    )
}

export default LoginPage;