import React,{Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import './style.css';


class Jumbotrons extends Component{
    render(){
        return (
            <Jumbotron fluid >
                <Container>
                        <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>  
                </Container>
            
            </Jumbotron>
        );
    }

}

export default Jumbotrons;
