import React from "react";
import { ListItem, List, ListItemText, Grid, Card} from "@material-ui/core";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import CheckIcon from '@mui/icons-material/Check';





const CadidateListItem = (props)=>{
    return(
        
            <List dense={true}>
             
                <ListItem>
                  <ListItemText
                    primary={props.candidate.name}
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