import React from 'react';
import GlobalStyle from "./globalStyles/GlobalStyle"
import {Container, Header, MessageContainer, Message, MessageUser, Footer, Form, Input, Button} from "./AppStyles"

function App() {
  return (
    <Container>
     <Header>
        WhatsLab
      </Header>
      <GlobalStyle/>
      

      <MessageContainer>
       <Message>Hello</Message>
       <MessageUser>Hi</MessageUser>  

       <Footer>
        <Form>
          <Input></Input>
          <Input></Input>
          <Button>SEND</Button>

        </Form>
      </Footer>

      </MessageContainer>

      

     
     
    </Container>
  )
}

export default App
