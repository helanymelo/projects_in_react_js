import React from "react";
import PageTitle from "../../components/PageTitle";
import CandidateList from "./CandidateList";
import { ContentContainer } from "./styles";
import TripInfo from "./TripInfo";

const TripPage =()=>{
    const trip = {
        "durationInDays": 980,
        "date": "21/12/20",
        "name": "Picnic de Inverno em Plutão",
        "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
        "planet": "Plutão",
        "id": "vKKweXn3ncGXN4RcVNqd",
        "candidates": []
        }

    
        
    
    return(
        <div>
            <PageTitle fontSize={{width:30}} title={'DETALHES DA VIAGEM'}/>
                <ContentContainer>
                <TripInfo info={trip}/>
                <CandidateList candidates={trip.candidates}/>
                </ContentContainer>
        </div>
    )
}

export default TripPage;