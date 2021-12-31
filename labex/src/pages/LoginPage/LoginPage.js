import { Button, TextField, Grid, Paper, Avatar} from "@material-ui/core";
import React from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import {useForm} from "../../hooks/useForm";
import axios from 'axios';



const LoginPage =()=>{
    const paperStyle={padding:20, height:'70vh', width:'300px', margin:'50px auto'}
    const avatarStyle={backgroundColor:'#2b34a1'}
    const btnStyle ={margin:'20px auto'}
    const {form, onChange} = useForm({email: "", password: ""})

    

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
    }

        

   
    return(
        <>
        <Grid onSubmit={ handleSubmission}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockRoundedIcon/></Avatar>
                    <h3>Sign In</h3>
                </Grid>
                <TextField label="E-mail" fullWidth required
                type="email"
                onChange={handleInputChange}
                value={form.email}
                name='email'/>

                <TextField label="Password" fullWidth required
                type='password'
                 onChange={handleInputChange}
                 value={form.password}
                 name='password'/>
                <Grid>
                    <Button type="submit" 
                        color="primary" 
                        variant="contained" 
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