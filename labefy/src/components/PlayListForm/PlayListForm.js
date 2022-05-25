import React from "react"
import styled from "styled-components"
import {baseUrl, axiosConfig} from "../../constants"
import axios from "axios";
import { toast } from "react-toastify";

const PlaylistContainer = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items: center;
    margin:90px;
    

`

const PlaylistCreation = styled.form`
    display:flex ;
    flex-direction:column ;
    justify-content: center;
    align-items:center ;

input{
    border:0 ;
    border-bottom:1px solid black ;
    width:400px ;
    padding:20px ;
    text-align:center ;
    outline:none ;
    font-size: 20px ;
}

button{
    
    margin:20px ;
    width:200px ;
    height:5vh ;
    background-color:transparent ;
    border: 2px solid green;
    font-weight: 200px ;
    text-decoration:none ;
    box-shadow:inset 0 0 32px #006400, 0 0 32px 0 #006400;
    cursor:pointer;
&:hover{
    background:black ;
    
    color: #fff;
}
   
}
`


class PlayListForm extends React.Component {
    state ={
        inputMusic:""
    }

    changeInputMusic = (e) =>{
        this.setState({inputMusic:e.target.value})
        console.log(this.state.inputMusic)
    }

    createPlaylist = (e) =>{
        e.preventDefault()
        const body = {
            name:this.state.inputMusic
        }

        axios.post(baseUrl, body, axiosConfig)
        .then(()=>{
            toast.success("Playlist adicionada com sucesso ✔")
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return (
            <PlaylistContainer>
                <PlaylistCreation onSubmit={this.createPlaylist}>
                    <label> <h1>O que você gostaria de curtir hoje? 😎</h1></label>
                    <input placeholder="Digite seu estilo de música favorito"
                        value={this.state.inputMusic}
                        onChange={this.changeInputMusic}
                    />
                    <button>Cadastrar Playlist</button>
                </PlaylistCreation>
            </PlaylistContainer>
          )
    }
 
}

export default PlayListForm