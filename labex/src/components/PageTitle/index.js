import  {Typography} from "@material-ui/core";
import React from "react";

const PageTitle =(props)=>{
    return <Typography variant='h2' align={'center'} gutterBottom>{props.title}</Typography>

}

export default PageTitle;