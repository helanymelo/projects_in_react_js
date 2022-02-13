import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { List } from "@mui/icons-material";
import CandidateListItem from "../../pages/TripDetailPage/CadidateListItem";




const CandidateList =(props)=>{
    return(
        <>
        
        <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
                <Typography  variant="h5" gutterBottom>
                   Lista de Candidatos
                </Typography>             
            </CardContent>
            <List>
                {props.candidates.map(candidate =>{
                    return<CandidateListItem candidate={candidate}/>
                })}

            </List>
        </Card>

    </>
    )
}

export default CandidateList;