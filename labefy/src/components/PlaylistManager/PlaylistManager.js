import React from "react"
import styled from "styled-components"
import PlaylistDetail from "../PlaylistDetail/PlaylistDetail"
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";


const PlaylistManagerContainer= styled.div`
    display:flex ;
    width:100%;
    height:100px ;
    


`


class PlaylistManager extends React.Component {
    state ={
        showPage: "playlistTitle"
    }

    changePage = (showPage) =>{
        this.setState({showPage:showPage})

    }

    showCurrentPage = () =>{
        if(this.state.showPage ==="playlistTitle"){
            return <PlaylistTitle changePage={this.changePage}/>
        }else if(this.state.showPage ==="playlistDetail"){
            return<PlaylistDetail changePage={this.changePage}/>
        }
    }
    render(){
        return (
            <PlaylistManagerContainer>
            
                    {this.showCurrentPage()}
                
            </PlaylistManagerContainer>
          )
    }
 
}

export default PlaylistManager