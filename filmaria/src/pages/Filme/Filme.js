import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import "./filme.css";
import { toast } from "react-toastify";

const Filme = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function loadFilm() {
      const response = await api.get(
        `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
      );

      if (response.data.length === 0) {
        history.replace("/");
        return;
      }
      setFilme(response.data);
      setLoading(false);
    }

    loadFilm();

    return () => {
      console.log("DESMONTADO");
    };
  }, [history, id]);

  function SalvarFilme() {
    const minhaLista = localStorage.getItem("filmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.error("Voce já salvou esse filme");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.info("Filme salvo com sucesso");
  }

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinópse</h3>
      <h3>{filme.sinopse}</h3>

      <div className="botoes">
        <button onClick={SalvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.nome} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Filme;
