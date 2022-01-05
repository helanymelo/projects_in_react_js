<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Application from './pages/Application/Application';
import LoginPage from './pages/LoginPage/LoginPage';
import CreateTripPage from './pages/CreateTripPage/CreateTripPage';
import TripDetailPage from "./pages/TripDetailPage/index";
import TripListPage from './pages/TripListPage/index';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';

const AppContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  padding:16px;
  
`;
  
function App() {
  return (
   
      <BrowserRouter>
        <AppContainer>
          <CssBaseline/>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/login' element={<LoginPage/>}/>
              <Route exact path='/cadastro' element={<Application/>}/>
              <Route exact path='/criar-viagem' element={<CreateTripPage/>}/>
              <Route exact path='/detalhes-viagens' element={<TripDetailPage/>}/>
              <Route exact path='/lista-viagem' element={<TripListPage/>}/>
            </Routes>   
            </AppContainer>   
        </BrowserRouter>
     
      
>>>>>>> b8dae96d896b26268f748535b525c7b5d96fd1c1
  );
}

export default App;
