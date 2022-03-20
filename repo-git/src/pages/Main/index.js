import React,{useState} from 'react'
import { Container, Form, SubmitButton } from './styles'   
import { FaGithub, FaPlus } from 'react-icons/fa'
import api from '../../service/api';

function Main() {
    const [newRepo, setNewRepo] = useState("")
    const [repositorios, setRepositorio] = useState([])

    function handleinputChange(e){
        setNewRepo(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault()

        const response = api.get(`repos/${newRepo}`)
        const data = {
            name: response.data.full_name
        }

        setRepositorio([...repositorios, data])
        setNewRepo("")

    }


  return (
    <Container>

        <h1>
            <FaGithub size={25}/>
            ADICIONAR REPOSITÓRIO
        </h1>

        <Form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Adicionar Repositório'
            value={newRepo}
            onChange={handleinputChange}
            />

            <SubmitButton>
                <FaPlus color='#FFF'/>
            </SubmitButton>
        </Form>
    
    </Container>
  )
}

export default Main