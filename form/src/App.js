import './App.css';
import React, {useState} from "react";

const times = [
  "Palmeiras",
  "Corinthians",
  "Santos",
  "São Paulo",
  "Flamengo",
  "Vasco",
  "Red bull"
]


function App(){
  const [busca, setBusca]=useState("")
  
  

  const timesFiltrados = times.filter((time)=>
  time.toLowerCase().includes(busca.toLocaleLowerCase()))
  
  


  return(
    <div>
      <input value={busca} onChange={e=>setBusca(e.target.value)}
      />
      {timesFiltrados.map((time)=>(
      <div>{time}</div>))}
    </div>
  )
}

export default App;