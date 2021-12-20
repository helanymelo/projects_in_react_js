import React from "react";
import PageTitle from "../../components/PageTitle";
import { TextField, Button, helperText } from "@material-ui/core";
import { CreateTripForm } from "./styles";


const Application =()=>{
    return(
        <div>
            <PageTitle title = {'Candidatar-se'}/>
            <CreateTripForm>
                <TextField label={'Nome'} type={'text'}/>
                <TextField label={'Idade'} type={'number'}/>
                <TextField label={'Data'} type={'text'}/>
                <TextField label={'Texto de aplicação'} type={'text'} helperText="Explique o porque quer viajar com a gente"/>
                <TextField label={'Profissão'} type={'text'}/>
                <TextField label={'Viagem'} type={'text'}/>
                <Button type={'submit'} variant={'contained'} color={'primary'}>Inscrever-se</Button>
            </CreateTripForm>
        </div>
    )
}

export default Application;