import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Application from './pages/Application/Application';
import LoginPage from './pages/LoginPage/LoginPage';
import CreateTripPage from './pages/CreateTripPage/CreateTripPage';
import TripDetailPage from "./pages/TripDetailPage/index";
import TripListPage from './pages/TripListPage/index';
import styled from 'styled-components';

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
     
      
  );
}

export default App;
