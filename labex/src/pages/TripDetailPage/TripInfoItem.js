import React from 'react';
import {Typography}  from '@material-ui/core';

const TripinfoIntem = (props) =>{
    return(
        <Typography variant="h6" >
            <strong>{props.infoName}</strong>:  {props.infoViagem}
        </Typography>
    )
}

export default TripinfoIntem;