import React from "react";
import PageTitle from "../../components/PageTitle";
import CandidateList from "./CandidateList";
import { ContentContainer } from "./styles";
import TripInfo from "./TripInfo";

const TripPage =()=>{
    
    return(
        <div>
            <PageTitle width='50px' title={'Detalhes da viagem'}/>
            <ContentContainer>
            <TripInfo/>
            <CandidateList/>
            </ContentContainer>
        </div>
    )
}

export default TripPage;