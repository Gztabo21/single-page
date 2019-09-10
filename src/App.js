import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navigation from './Components/navigation/navbar';
import Jumbotrons from'./Components/jumbotron/jumbotron';
import  Timeline from './Components/timeline/time-line';


function App() {
 

  return (
    
    <div className="App">
      <Navigation/>
      <header className="App-header">
      <Timeline />  
        <img src={logo} className="App-logo" alt="logo" />
      <Jumbotrons />
      </header>
      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
