import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import {toast} from "react-toastify";


const Favoritos = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id){
    if(window.confirm("Quer deletar esse filme?")){
      const filtroFilmes = filmes.filter((item)=>{
        return(item.id!==id)
      })
      setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes))
    toast.success("Filme excluído com sucesso!")
  }
}
    

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes Favoritos</h1>
     
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <img src={item.foto} alt={item.nome} />
              <hr />
              <div>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <button onClick={()=> handleDelete(item.id)}>EXCLUIR</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
      }

export default Favoritos;
