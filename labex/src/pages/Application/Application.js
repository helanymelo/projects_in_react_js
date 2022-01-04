import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { TextField, Button } from "@material-ui/core";
import {FormContainer} from "../../components/FormContainer/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useForm } from "../../hooks/useForm";

const Application =()=>{
    const [trips, setTrips] = useState([])
    const [form, onChangeInput] = useForm({
        name:"",
        age:0,
        textApplication:"",
        profession:"",
        country:"",
        trip:""
    })

    

    
    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-johnson/trips")
        .then((res)=>{
            
            setTrips(res.data.trips)
        })
    },[])

    const onSubmitApplication = (e) =>{
        e.preventDefault()
        console.log(form)
        const body ={
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
       
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-johnson/trips/${form.trip.id}/apply`, body)
    }
    console.log(form)
    
    return(
        <div>
            <PageTitle title = {'Candidatar-se para uma Viagem'}/>

            <FormContainer onSubmit={onSubmitApplication}>
                <TextField label={'Nome'} type={'text'}
                    onChange={onChangeInput}
                    value={form['name']}
                    name={'name'}
                />

                <TextField label={'Idade'} type={'number'}
                    onChange={onChangeInput}
                    value={form['age']}
                    name={'age'}
                />

                <TextField label={'Data'} type={'text'}/>                            

                <TextField label={'Texto de aplicação'} type={'text'} helperText={"Explique o porque quer viajar com a gente"}
                     onChange={onChangeInput}
                     value={form['textApplication']}
                     name={'textApplication'}
                />
                <TextField label={'Profissão'} type={'text'}
                     onChange={onChangeInput}
                     value={form['profession']}
                     name={'profession'}
                
                />
                <FormControl fullWidth>
                    <InputLabel id= "Select-Contries">País</InputLabel>
                        <Select
                            labelId="Select-Contries"
                            onChange={onChangeInput}
                            value={form['country']}
                            name={'country'}>
                            <MenuItem value={""}></MenuItem>
                            <MenuItem value={"Brasil"}>Brasil</MenuItem>
                            <MenuItem value={"Argentina"}>Argentina</MenuItem>
                            <MenuItem value={"Estados Unido"}>Estados Unidos</MenuItem>
                        </Select>
                </FormControl>

                <FormControl >
                    <InputLabel id="Select-Planet">Planeta</InputLabel>
                        <Select
                            labelId="Select-Planet"
                            onChange={onChangeInput}
                            value={form['trip']}
                            name={'trip'}>
                            {trips.map((trip)=>{
                                return <MenuItem value={trip}>{trip.name}</MenuItem>
                            })}
                        </Select>
                </FormControl>
                <Button type={'submit'} variant={'contained'} color={'primary'}>Inscrever-se</Button>
                </FormContainer>
        </div>
    )
}

export default Application;