import React, { Component } from 'react';

class Service extends Component {
    

  render() {
    // const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
    // const response = await fetch(API_URL);
    // const data = await response.json();
    // console.log(data)
    return (
      <div className="page">
        <p>Hola {this.props.name} desde página 1</p>
      </div>
    );
  }
}

export default Service;