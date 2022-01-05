import {useState, useEffect} from 'react';
import axios from 'axios';

export const useTripsList = () =>{
    const [trips, setTrips] = useState([])
    

    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/trips")
        .then((res)=>{
        setTrips(res.data.trips)
        })
    },[])

    return trips;

}