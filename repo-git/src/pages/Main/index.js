import React from 'react'
import { Container, Form, SubmitButton } from './styles'   
import { FaGithub, FaPlus } from 'react-icons/fa'

function Main() {
  return (
    <Container>

        <h1>
        <FaGithub size={25}/>
            Main
        </h1>

        <Form onSubmit={()=>{}}>
            <input type="text" placeholder='Adicionar Repositório'/>

            <SubmitButton>
                <FaPlus color='#FFF'/>
            </SubmitButton>
        </Form>
    
    </Container>
  )
}

export default Main