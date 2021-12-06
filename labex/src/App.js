import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Application from './pages/Application/Application';
import LoginPage from './pages/LoginPage/LoginPage';
import CreateTripPage from './pages/CreateTripPage/CreateTripPage';
import TripDetail from "./pages/TripDetail/TripDetail";
import TripList from './pages/TripList/TripList';
import styled from 'styled-components';

const AppContainer = styled.div`
  display:flex;
  margin:auto;
  align-item:center;
  padding:16px;
  
`;
  





function App() {
  return (
      <BrowserRouter>
        <AppContainer>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/loginPage' element={<LoginPage/>}/>
              <Route exact path='/cadastro' element={<Application/>}/>
              <Route exact path='/criar-viagem' element={<CreateTripPage/>}/>
              <Route exact path='/detalhes-viagens' element={<TripDetail/>}/>
              <Route exact path='/lista-viagem' element={<TripList/>}/>
            </Routes>
          </AppContainer>
      </BrowserRouter>
      
  );
}

export default App;
