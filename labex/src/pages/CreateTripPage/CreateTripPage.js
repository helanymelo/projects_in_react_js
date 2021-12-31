import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import { FormContainer } from "../../components/FormContainer/styles";

const CreateTripPage =()=>{
    return(
        <div>
        <PageTitle title = {'Criar Viagem'}/>
        <FormContainer>
            <TextField label={'Nome'} type={'text'}/>
            <TextField label={'Planeta'} type={'text'}/>
            <TextField label={'Data'} type={'text'}/>
            <TextField label={'Descrição'} type={'text'}/>
            <TextField label={'Duração em dias'} type={'number'}/>
            <Button type={'submit'} variant={'contained'} color={'primary'}>Enviar</Button>
        </FormContainer>
        </div>
          
        
        
    )
}

export default CreateTripPage;