import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { List } from "@mui/icons-material";
import CandidateListItem from "../../pages/TripDetailPage/CadidateListItem";




const CandidateList =()=>{
    return(
        <>
        
        <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
                <Typography  variant="h5" gutterBottom>
                   Lista de Candidatos
                </Typography>             
            </CardContent>
            <CandidateListItem/>
            <CandidateListItem/>
            <CandidateListItem/>
            <CandidateListItem/>
            <CandidateListItem/>
        
      
        </Card>

    </>
    )
}

export default CandidateList;