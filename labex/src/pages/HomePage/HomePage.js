import React from "react";
import { Button} from "@material-ui/core";
import {ButtonContainer, Title, Container} from "./styles";
import {Link} from "react-router-dom";






const HomePage = ()=>{
   
    return(   
        <Container>
            <Title>LabeX 
                
            </Title>
            <ButtonContainer>
                <Link to={'/login'}>
                    <Button variant={'outlined'} color={'primary'}width='200px'>Administrador</Button>
                 </Link>
                 <Link to={'/cadastro'}>
                     <Button variant={'outlined'} color={'primary'} width='200px'>Cadidatar-me</Button>
                </Link>                     
            </ButtonContainer>
        </Container>                                
            
        
        
            
              
    )
}

export default HomePage;