import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'

const background_url = process.env.PUBLIC_URL + "/img/background.png"

const HeaderWrapper = styled.header`
  width: 100%;
  height: 48px;
  background-color: #242424;
  opacity: 0.8;  
`
const MenuWrapper = styled.div`
  height: 90px;
  padding-top: 22px;
`
const MainWrapper = styled.main`
  height: 562px;
  padding-top: 131px;
  background: url(${background_url})  no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <MainWrapper>
          <Main />
        </MainWrapper>
      </div>
    );
  }
}

export default App;
