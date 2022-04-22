import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import api from '../../service/api'
import { useParams } from 'react-router';

export default function Repositorio(){

  const {id} = useParams()

  const [repositorio, setRepositorio] = useState({ });
  const [issues, setIssues] = useState([ ]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    
    async function load(){
      const nomeRepo = decodeURIComponent(repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          useParams:{
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);

    }

    load();

  }, []);

  return(
    <Container>

    </Container>
  )
}