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
import Footer from './Components/footer/footer';
import Contact from './Components/contact/contact';


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
              path="/about"
              render={() => <About  />} />
            <Route
              exact
              path="/service"
              render={() => <Service name="Services" />} />
              <Route
              exact
              path="/contact"
              
              render={() => <Contact />} />
            <Route component={PageError} />
          </Switch>
          <Footer/>
          </div>
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
