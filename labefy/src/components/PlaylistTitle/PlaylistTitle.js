import React from 'react';
import styled from "styled-components";
import {FaTrashAlt} from "react-icons/fa"
import axios from "axios"
import { axiosConfig, baseUrl } from '../../constants';
import {toast} from "react-toastify"

const PlaylistContainer = styled.div`
    display:flex;
    flex-direction:column ;
    padding:15px ;
    align-items:center ;
    width:100vw ;
    height:50px;

   
  
    
    
`

const DeleteButton = styled.div`
    svg{
        color:#9999;
        cursor: pointer;
    }
    svg:hover{
        color:#000 ;
    }


`
const PlaylistCard = styled.div`
    display:flex ;
    justify-content:space-around;
    align-items: center;
    width:300px ;
    height:80px ;
    border:1px solid green ;
    
    
    
`

class PlaylistTitle extends React.Component{
    state = {
        list: [
            {
                id: "b5f4fc57-167d-4962-85e8-483cb11cdba4",
                name: "pagode"
            },
            {
                id: "ccc1fceb-0654-4916-8111-936c1fd788c6",
                name: "pop music"
            },
            {
                id: "494bfda0-7af0-49eb-b9bf-74c3185327b0",
                name: "eletronica"
            }
        ]
    }

    componentDidMount = () =>{
        this.getPlayLists()
    }

    getPlayLists = () =>{
        axios.get(baseUrl, axiosConfig)
        .then((res)=>{
           
            this.setState({list: res.data.result.list})
        
        }).catch((err)=>{
            console.log(err)
        })

        this.setState({inputMusic:""})
    }

    deletePlayList = (id) =>{
        axios.delete(`${baseUrl}/${id}`, axiosConfig)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }


    render(){

        return(
            <div>
                {this.state.list.map((playlist)=>{
                    return(
                        <PlaylistContainer>
                            <PlaylistCard key={playlist.id}>
                                {playlist.name}
                                
                                
                                <button onClick={()=>this.props.changePage("playlistDetail")}>Ver Detalhes</button>
                                <DeleteButton onClick={()=>this.deletePlayList(this.id)} ><FaTrashAlt/></DeleteButton>

                            </PlaylistCard>
                         </PlaylistContainer>
                        
                    )
                })}
               

            </div>
        )
    }
}

export default PlaylistTitle