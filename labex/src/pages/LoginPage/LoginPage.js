import { Button, TextField, Grid, Paper, Avatar} from "@material-ui/core";
import React from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import {useForm} from "../../hooks/useForm";



const LoginPage =()=>{
    const paperStyle={padding:20, height:'70vh', width:'300px', margin:'50px auto'}
    const avatarStyle={backgroundColor:'#2b34a1'}
    const btnStyle ={margin:'20px auto'}
    const {form, onChangeInput} = useForm({email:"", password:""})


    const onSubmitLogin = (event) =>{
        event.preventDefault()
    }

  
   return(
        <>
        <Grid onSubmit={onSubmitLogin}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockRoundedIcon/></Avatar>
                    <h3>Sign In</h3>
                </Grid>
                <TextField label={"Email"} 
                type={"email"}
                onChange={onChangeInput}
                value={form["email"]}
                name={"email"}/>

                <TextField label={"password"} 
                type={"password"}
                 onChange={onChangeInput}
                 value={form["password"]}
                 name={"password"}/>
                <Grid>
                    <Button type={"submit"} 
                        color={"primary"} 
                        variant={"contained"} 
                        fullWidth 
                        style={btnStyle}>
                            Acessar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
        
        </>
    )
}

export default LoginPage;