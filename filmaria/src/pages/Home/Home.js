import React from "react";
import api from "../../services/api";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './home.css';

const Home = () => {
  const [filmes, setFilmes] = useState([ ]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("https://sujeitoprogramador.com/r-api/?api=filmes")
      setFilmes(response.data);
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt=""/>
              <Link to={`/filme/${filme.id}`}>
                Acessar
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
