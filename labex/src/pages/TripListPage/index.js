import { Typography, Button } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom';
import { ButtonContainer, ListContainer } from './styles'

const TripListPage =()=>{
    return(
        <div>
            <Typography variant='h5' align={'center'}>LISTA DE VIAGENS</Typography>
            <ButtonContainer>
                <Link to={'/criar-viagem'}>
                
                    <Button variant='contained' color='primary'>Criar Viagem</Button>
                </Link>
            </ButtonContainer>

                <ul>
                  <Link to={'/detalhes-viagens'}>
                    Viagem para Marte
                  </Link>
                </ul>

                <ul>
                  <Link to={'/detalhes-viagens'}>
                    Viagem para Lua
                  </Link>
                </ul>
                       
            
                 
           
        </div>
    )
        
        
}

export default TripListPage;