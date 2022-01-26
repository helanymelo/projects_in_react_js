import { Typography, Button } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom';
import { useTripsList } from "../../hooks/useTripsList";
import { ButtonContainer } from './styles'

const TripListPage =()=>{
  const trips  = useTripsList()
    return(
        <>
            <Typography variant='h5' align={'center'}>LISTA DE VIAGENS</Typography>
              <Typography align={"center"}>
                {trips.map((trip)=>{
                  return<Link to={'/criar-viagem'}>
                    <ul>
                      {trip.name}
                      </ul>
                  </Link>
                })}
              </Typography>                                         
                                
        </>
    )
            
}

export default TripListPage;