import "./styles.css";
import Route from "./route/route";
import React, { ToastContainer } from "react-toastify";


// https://sujeitoprogramador.com/r-api/?api=filmes

export default function App() {
  return (
    <div className="App">
      <Route />
      <ToastContainer autoClose={3000}/>
    </div>
  );
}
