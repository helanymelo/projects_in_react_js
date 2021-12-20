import React from "react";
import { ListItem, List, ListItemText, Grid, Card} from "@material-ui/core";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import CheckIcon from '@mui/icons-material/Check';





const CadidateListItem =()=>{
    return(
        
            <List dense={true}>
             
                <ListItem>
                  <ListItemText
                    primary="Candidato1"
                  />
                <Grid item xs={4} >
                    <CheckIcon />
                    <DeleteSharpIcon />
                </Grid>
                </ListItem>
                
            </List>
        
          
        
           
            
            
            
         
        
  
    )
}

export default CadidateListItem;