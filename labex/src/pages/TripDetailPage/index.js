import React from "react";
import PageTitle from "../../components/PageTitle";
import CandidateList from "./CandidateList";
import { ContentContainer } from "./styles";
import TripInfo from "./TripInfo";

const TripPage =()=>{
    
    return(
        <div>
            <PageTitle fontSize={{width:30}} title={'DETALHES DA VIAGEM'}/>
            <ContentContainer>
            <TripInfo/>
            <CandidateList/>
            </ContentContainer>
        </div>
    )
}

export default TripPage;