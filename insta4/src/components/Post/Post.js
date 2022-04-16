import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {FaTrashAlt} from "react-icons/fa"

const PostContainer = styled.div`
  
  border: 1px solid gray;
  max-width: 300px;
  margin-bottom: 10px;
  margin: 0 auto 10px;
 
`

const Trash = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-left: 160px ;
  justify-content:flex-end ;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content:flex-start;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
  height:200px ;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    console.log('Curtiu!')

  if(!this.state.curtido) {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1
    })

  } else {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas
    })
  }
  
  }
  
    onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  deletarPost = (novoPost) =>{
    const novosPosts = [ ...this.state.posts]
    const novosPostsFiltrados = novosPosts.filter((post)=> {
      return post.nomeUsuario, post.fotoPost, post.fotoUsuario !== novoPost
    })
    this.setState({posts: novosPostsFiltrados})

  }
  
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
       
        <p>{this.props.nomeUsuario}</p>

        <Trash>
        <FaTrashAlt role="button"
          onClick={() => this.deletarPost()}
        /></Trash>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post