import React ,{Component}from 'react';

import Jumbotrons from '../jumbotron/jumbotron';
import CardPr from '../card/card';

class Home extends Component {
    render() {
      return (
           <div>
           <Jumbotrons/>

         
             <CardPr/>
           </div>
        
      );
    }
  }
  
  export default Home;