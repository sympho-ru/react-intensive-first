import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './Slider';

const Title = styled.h1`
	margin: 0;
	color: #fff;
	font-weight: 700;
	line-height: 45px;
	font-size: 40px;
	span {
		font-size: 24px;
		line-height: 30px;
		display: block;
	}
`
const Offer = styled.div`
	margin-top: 54px;
	color: #fff;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
`
const ButtonQuote = styled.button`
	margin-top: 34px;
	width: 245px;
	height: 64px;
	border-radius: 32px;
	border: 0;
	background-color: #ffa14b;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	line-height: 24px;
`

class Main extends React.Component {
  render() {
    return (
    	<Grid>
    		<Row>
	    		<Col lg={5}>
	    			<Title>Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span></Title>
	    			<Offer>Оставьте заявку на бесплатную диагностику без
	    			очереди, и получите защитное стекло, стоимостью
	    			1000 рублей, с установкой в подарок!
	    			</Offer>
	    			<ButtonQuote>Отправить заявку!</ButtonQuote>
	    		</Col>
	    		<Col lg={6} lgOffset={1}>
	    			<Slider />
	    		</Col>
	    	</Row>
    	</Grid>
    )
  }
}

export default Main
