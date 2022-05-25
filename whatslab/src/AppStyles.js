import styled from "styled-components"


export const Container = styled.div`
 
 height:100vh ;
 background-color:#ddd ;
 display:flex ;
 justify-content:center;
 align-items:center ;
 flex-direction:column ;
 box-shadow: 2px 2px 2px rgba(0,0,0,0.4) ;
 flex-grow: 1;
 
  

`

export const Header = styled.div`



`

export const MessageContainer = styled.div`
 width:500px; 
 height:600px;
 display:flex ;
 flex-direction:column ;
 border: 1px solid #000 ;
 flex-grow:1 ;




`

export const Message= styled.div`
  background-color:blue ;
  padding:10px ;
  color:#fff;
  border-radius: 10px;
  width:fit-content ;
  margin-bottom:1px ;


`
export const MessageUser = styled.div`
  margin-left:auto ;
  background-color:green ;
  width:fit-content ;

`

export const Footer= styled.footer`
  display: flex;
  flex: 1;

`

export const Form = styled.form`
  flex:1;

`


export const Input = styled.input`
flex-grow:1 ;
outline:none ;
width:216px ;

`

export const Button = styled.button`

`