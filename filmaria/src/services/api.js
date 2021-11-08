import axios from "axios";

// https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
  baseURL: "sujeitoprogramador.com"
});

export default api;
