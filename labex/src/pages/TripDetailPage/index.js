<<<<<<< HEAD
import React from 'react'

const TripDetailPage = () => {
    return (
        <div>
            <h1>TripDetailPage</h1>
=======
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
>>>>>>> b8dae96d896b26268f748535b525c7b5d96fd1c1
        </div>
    )
}

<<<<<<< HEAD
export default TripDetailPage
=======
export default TripPage;
>>>>>>> b8dae96d896b26268f748535b525c7b5d96fd1c1
