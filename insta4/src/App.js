import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const Input = styled.input`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width:266px;
  padding: 10px  15px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  outline:0 ;
  


`

const Button = styled.button`
  display: flex;
  align-items:center ;
  justify-content:center ;
  margin: auto;
  margin-bottom: 20px;
  width:300px;
  text-align: center;
  justify-content: center;
  border:none;
  background-color:#000 ;
  color:#fff;
  height:30px ;
  font-size:15px ;

  &:hover{
    background-color:#efbc30 ;
    color:#000 ;
  }
`


class App extends React.Component {
   state = {

    posts:[

  {
    nomeUsuario:'Paulinha',
    fotoUsuario:'https://picsum.photos/50/52',
    fotoPost:'https://picsum.photos/200/150'
  },
    
  {
    nomeUsuario:'João',
    fotoUsuario:"https://picsum.photos/55/51",
    fotoPost: "https://picsum.photos/200/151"
  
  },

  {
    nomeUsuario:'Amanda',
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
 
  }
    ],

    inputNomeUsuario:"",
    inputFotoUsuario:"",
    InputFotoPost:"",
    


  };

  onChangeinputNomeUsuario = (e) =>{
    this.setState({inputNomeUsuario:e.target.value})
    
  };

  onChangeinputFotoUsuario = (e)=>{
    this.setState({inputFotoUsuario:e.target.value})
  };

  onChangeinputFotoPost =(e) =>{
    this.setState({InputFotoPost:e.target.value})
  };

  adicionaNovosPosts = () =>{
    const novosPosts = [...this.state.posts];
    novosPosts.push({
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.InputFotoPost
    });


  
    this.setState({
      posts:novosPosts,
      nomeUsuario:"",
      fotoUsuario:"",
      fotoPost:"",
      //Aqui repete o estado pra quando clicar o input ficar vazio novamente//
      inputNomeUsuario:"",
      inputFotoUsuario:"",
      InputFotoPost:""
          
    })
  };



 

  
  listadeComponentes = () => this.state.posts.map((post) =>{

    return(
      <div>
        
         <Post

           
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />

      </div>
     

     


   
    )})

  render(){
  
    return (
    <div>
    <Input
     value={this.state.inputNomeUsuario}
     onChange={this.onChangeinputNomeUsuario}
     type="text"
     required
     placeholder = "Nome"
    />

    <Input
     value={this.state.inputFotoUsuario}
     onChange={this.onChangeinputFotoUsuario}
     type="text"
     required
     placeholder = "Foto do Usuário"
     /> 

    <Input
     value={this.state.InputFotoPost}
     onChange={this.onChangeinputFotoPost}
     type="text"
     required
     placeholder = "Foto da Postagem"

     />
    
     <Button onClick={this.adicionaNovosPosts}>ADICIONAR POST</Button>
     <div>{this.listadeComponentes()}</div>

      </div>
      
    );
  }
}
         

export default App;



  