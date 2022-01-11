import logo from './logo.svg';
import './App.css';
import Container from './components/Content';

function App() {
  return (
    <div className="App">
      <Container cor='black' text='REACT JS'/>
      <Container cor='blue' text='HTML'/>
      <Container cor='orange' text='CSS'/>
      <Container cor='green' text='JAVASCRIPT'/>
    </div>
  );
}

export default App;
