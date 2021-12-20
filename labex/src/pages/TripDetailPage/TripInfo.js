import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripinfoIntem from "./TripInfoItem";

const TripInfo =()=>{
    
    return(
        <>
            <Card sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                    <Typography  color="black" variant='h5'gutterBottom>
                       Informações da Viagem
                    </Typography>
                    <TripinfoIntem infoName={'Nome'} infoViagem={'Viagem para Marte'}/>
                    <TripinfoIntem infoName={'Planeta'} infoViagem={' Marte'}/>
                    <TripinfoIntem infoName={'Data'} infoViagem={'14/12/2021'}/>
                    <TripinfoIntem infoName={'Descriçao'} infoViagem={'Viagem incrível para colonizar Marte'}/>
                    <TripinfoIntem infoName={'Duração em dias'} infoViagem={'200 dias'}/>
                </CardContent>
            </Card>
    
        </>
      
    )
    
}

export default TripInfo;