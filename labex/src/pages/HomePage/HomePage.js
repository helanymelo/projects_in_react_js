import React from "react";
import { Button} from "@material-ui/core";
import {ButtonContainer} from "./styles";
import {Link} from "react-router-dom";
import PageTitle from "../../components/PageTitle";




const HomePage = ()=>{
   
    return(   
        <div>
              <PageTitle title={'LabeX'}/>
            <ButtonContainer>
                <Link to={'/login'}>
                    <Button variant={'outlined'} color={'secondary'}width='100%'>Administrador</Button>
                 </Link>
                 <Link to={'/cadastro'}>
                     <Button variant={'outlined'} color={'secondary'} width='100%'>Cadidatar-me</Button>
                </Link>                     
            </ButtonContainer>
             
        
        </div>     
            
              
    )
}

export default HomePage;