import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import { CreateTripForm}  from "./styles";

const CreateTripPage =()=>{
    return(
        <div>
        <PageTitle title = {'Criar Viagem'}/>
        <CreateTripForm>
            <TextField label={'Nome'} type={'text'}/>
            <TextField label={'Planeta'} type={'text'}/>
            <TextField label={'Data'} type={'text'}/>
            <TextField label={'Descrição'} type={'text'}/>
            <TextField label={'Duração em dias'} type={'text'}/>
            <Button type={'submit'} variant={'contained'} color={'primary'}>Enviar</Button>
        </CreateTripForm>
        </div>
          
        
        
    )
}

export default CreateTripPage;