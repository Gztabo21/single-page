import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navigation from './Components/navigation/navbar';
import Home from './Components/home/home';
import About from './Components/about/about';
import PageError from './Components/pageError/pageError';
import Service from './Components/services/service';

function App() {
 

  return (
    <BrowserRouter>
       <div> <Navigation/>
         <Redirect
            from="/"
            to="/home" />
            
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/page1"
              render={() => <About  />} />
            <Route
              exact
              path="/page2"
              render={() => <Service name="Services" />} />
            <Route component={PageError} />
          </Switch></div>
        </BrowserRouter>

    // <div className="App">
      
    //   <header className="App-header">
    //   <Timeline />  
    //     <img src={logo} className="App-logo" alt="logo" />
    //   <Jumbotrons />
     
    //   </header>
    //   <div className="content">
        
    //   </div>
    // </div>
  );
}

export default App;
