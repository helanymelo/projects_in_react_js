import React from "react"
import styled from "styled-components"


const HeaderContainer = styled.div`
    display:flex ;
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #0bab64 ); 
    width:100%;
    height:100px ;
    justify-content:flex-end ;


button{
    margin:30px ;
    
}
`


class Header extends React.Component {
    render(){
        return (
            <HeaderContainer>
                <div>
                    <button onClick={()=>this.props.onClick("playlistForm")}>Criar Playlist</button>
                    <button onClick={()=>this.props.onClick("playlistManager")}>Ver Playlist</button>
                </div>
            </HeaderContainer>
          )
    }
 
}

export default Header