import React from "react";
import {FaTrashAlt} from "react-icons/fa"

import styled from "styled-components"

const TrackCardContainer = styled.div`
    flex-direction:column;
    justify-content:space-between ;
    border:1px solid #000 ;
   
    
    

div{
    display:flex ;
    align-items:center ;
    justify-content:center ;
    
   
   

    
   
}

`

const TrackName = styled.div`
    margin:10px ;
    display:flex ;
    


`

const Artist = styled.div`
    margin-right:20px ;
    display:flex ;
    justify-content:center ;
    align-items:center ;

`



const DeleteMusic = styled.div`
    color: gray;

    &:hover{
        color: #000;
    }

`


class TrackCard extends React.Component{
    render(){
        return(
            <TrackCardContainer>
                <div>
                    <TrackName>{this.props.TrackName}</TrackName>
                    <Artist>{this.props.artist}</Artist>
                    <DeleteMusic onClick={""}><FaTrashAlt/></DeleteMusic>
                </div>
                <audio src="mp3" autoplay>
                  
                </audio>
               
            </TrackCardContainer>
        )
    }
}

export default TrackCard