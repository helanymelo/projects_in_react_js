import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TripinfoIntem from "./TripInfoItem";

const TripInfo =(props)=>{
    const {name, planet, description, date, durationInDays } = props.info
    
    return(
        <>
            <Card sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                    <Typography  color="black" variant='h5'gutterBottom>
                       Informações da Viagem
                    </Typography>
                    <TripinfoIntem infoName={'Nome'} infoViagem={name}/>
                    <TripinfoIntem infoName={'Planeta'} infoViagem={planet}/>
                    <TripinfoIntem infoName={'Data'} infoViagem={date}/>
                    <TripinfoIntem infoName={'Descriçao'} infoViagem={description}/>
                    <TripinfoIntem infoName={'Duração em dias'} infoViagem={durationInDays}/>
                </CardContent>
            </Card>
    
        </>
      
    )
    
}

export default TripInfo;