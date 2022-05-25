import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import PlayListForm from './components/PlayListForm/PlayListForm';
import PlaylistManager from './components/PlaylistManager/PlaylistManager';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  state = {
    showPage: "playlistForm" 
  }

  changePage = (showPage)=>{
    this.setState({showPage:showPage})
  }

  showCurrentPage = () =>{
    if(this.state.showPage === "playlistForm"){
      return <PlayListForm />
    } else if(this.state.showPage === "playlistManager"){
      return <PlaylistManager/>
    }
  }





  render(){
    return (
      <div className="App">
        <ToastContainer autoClose={3000}/>
        <Header
          onClick={this.changePage}
        />
        {this.showCurrentPage()}
        
      </div>
    );

  }
 
}

export default App;
