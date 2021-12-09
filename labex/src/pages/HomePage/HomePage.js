import React from "react";
import  Typography  from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import {ButtonContainer} from "./styles";
import {Link} from "react-router-dom";



const HomePage =()=>{
    return(
        <div>
            <Typography variant='h2' align={'center'}>LabeX</Typography>
            <ButtonContainer>
                <Link to={'/login'}>
                    <Button variant={'outlined'} color={'secondary'}width='100%'>Administrador</Button>
                </Link>

                <Link to={'/cadastro'}>
                    <Button variant={'outlined'} color={'secondary'} width='100%'>Cadidatar-me</Button>
                </Link>
                
                
            </ButtonContainer>
        </div>
        
    )
}

export default HomePage;