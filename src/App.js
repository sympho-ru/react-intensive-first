import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Alexander" surname="Rassokhin" link="https://google.com" />
        <SayFullName name="Elena" surname="Rassokhina" link="https://instagr.am" />
        <SayFullName name="Sophia" surname="Rassokhina" link="#" />
      </div>      
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h2>My name is {props.name}, surname is {props.surname}</h2>
        <a href={props.link}>My profile: {props.link}</a>
      </div>
    )
}

export default App;
