import {useState, useEffect} from 'react';
import axios from 'axios';

export const useTripsList = () =>{
    const [trips, setTrips] = useState([])
    

    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-johnson/trips")
        .then((res)=>{
            setTrips(res.data.trips)
            console.log(res.data.trip)
        })
    },[])

    return trips;

}