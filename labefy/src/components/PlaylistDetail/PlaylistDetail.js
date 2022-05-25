import React from 'react';
import {FaArrowCircleLeft} from "react-icons/fa"
import styled from "styled-components"
import TrackCard from '../TrackCard/TrackCard';

const Arrowbutton = styled.div`
  svg{
      width:200px;
      height:40px;
      margin-top:40px ;


 &:hover{
     color:green;
 }
  }




`
const PlaylistDetailCard = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    width:100vw ;
    height:18rem ;


    


`

const TrackForm = styled.div`
    display:flex ;
    justify-content:center ;
    margin-top: 10px ;
    flex-direction:column ;
    align-items:center;
    width:100px ;

input{
    border-bottom:1px solid gray ;
    border-left: none ;
    border-top:none;
    border-right:none ;
    margin:5px ;
    width:400px ;
    outline:none ;
} 

button{
    width:400px ;
    background:#fff ;
    color: green;
    margin:15px;
    border: 1px solid #000;
    cursor: pointer;

    &:hover{
        background-color:green ;
        color: #000;

    }


}
`



class PlaylistDetail extends React.Component{
    state = {
        tracks: [
            {
                "id": "51ec4fcc-164c-4bdf-aae7-423aea43e948",
                "name": "Sorry",
                "artist": "Justin Bieber",
                "url": "https://musio.net.br/doug-albert/uma-cancao-de-natal/love-yourself-justin-bieber-cover/"
            },
           
        ]
    }
    render(){
        const tracks = this.state.tracks.map((track)=>{
            return <TrackCard track = {track.name} artist={track.artist} url={track.url} key={track.id}/>
        })
        return(
            <PlaylistDetailCard >
            <Arrowbutton onClick={()=>this.props.changePage("playlistTitle")}><FaArrowCircleLeft/></Arrowbutton>
                <TrackForm>
                    <div>
                      
                        <input placeholder='Nome da música'/>
                    </div>
                    <div>
                       
                        <input placeholder='Nome do artísta'/>
                    </div>
                    <div>
                        
                        <input placeholder='url'/>
                    </div>
                    <button type="submit">Adicionar Música</button>
                
                </TrackForm> 
                    <p>{tracks}</p>
                                
            </PlaylistDetailCard>
           
        )
    }
}

export default PlaylistDetail