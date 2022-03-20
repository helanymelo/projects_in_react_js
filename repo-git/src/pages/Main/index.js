import React,{useState, useCallback} from 'react'
import { Container, Form, SubmitButton } from './styles'   
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'
import api from '../../service/api';

function Main() {
    const [newRepo, setNewRepo] = useState("")
    const [repositorios, setRepositorio] = useState([])
    const [loading, setLoading] = useState(false)

    function handleinputChange(e){
        setNewRepo(e.target.value)

    }

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();

        async function submit(){
            setLoading(true)
            try{
                const response = await api.get(`repos${newRepo}`)

                const data = {
                    name: response.data.full_name,
            }
            
            setRepositorio([...repositorios, data])
            setNewRepo('')
            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
                    
        }
        submit()


    },[newRepo, repositorios])

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

            <SubmitButton Loading={loading ? 1: 0} >
               {loading ? (
                   <FaSpinner color="#FFF" size={14}/>
               ) : (
                   <FaPlus color="#FFF" size={14}/>
               )}
                
            </SubmitButton>
        </Form>
    
    </Container>
  )
}

export default Main