import React ,{Component}from 'react';
// custom style
import './navbar';
//Router
import { Link } from 'react-router-dom';
// boostrap 
import Navbar from "react-bootstrap/Navbar";
import NavDropdown  from "react-bootstrap/NavDropdown";
import Nav  from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


function Home() {
    return <h2>Home</h2>;
  }

class Navigation extends Component{
    render(){
        return(
        
<Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Single- Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
               
                <Nav.Link > <Link to="/home" className="home" >Home </Link></Nav.Link>
                <Nav.Link ><Link to="/about" className="link">About</Link></Nav.Link>
                <Nav.Link ><Link to="/service" className="link">Service</Link></Nav.Link>
                <Nav.Link ><Link to="/contact" className="link">Contact</Link></Nav.Link>
                
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
  
            
            
        );
    }
}
export default Navigation;