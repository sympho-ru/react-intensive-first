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
        <HelloWorld/>
        <SayFullName name="Alexander" surname="Rassokhin" link="https://google.com" />
        <SayFullName name="Darth" surname="Vader" link="https://instagr.am" />
        <SayFullName name="Tony" surname="Stark" link="#" />
      </div>      
    );
  }
}

function HelloWorld() {
  return (
      <h1>Hello, world!</h1>
    )
}
function SayFullName(props) {
  return (
      <React.Fragment>
        <h2>My name is {props.name}, surname is {props.surname}</h2>
        <a href={props.link}>My profile: {props.link}</a>
      </React.Fragment>
    )
}

export default App;
