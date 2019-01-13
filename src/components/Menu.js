import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const TextBlockRepair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const TextBlockScheduleOffice = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;
	span.address {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const TextBlockSchedulePhone = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;
	span.phone {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const ButtonCall = styled.button`
	width: 173px;
	height: 45px;
	border-radius: 23px;
	border: 0;
	background-color: #3fc7db;
	color: #fff;
	font-size: 14px;
	font-weight: 400;
	line-height: 22.04px;
`
class ScheduleOffice extends Component {
	render() {
		return (
			<span>{this.props.schedule}</span>
			)
	}
}
class SchedulePhone extends Component {
	render() {
		return (
			<span>{this.props.schedule}</span>
			)
	}
}
class Address extends Component {
	render() {
		return (
			<span className="address">{this.props.address}</span>
			)
	}
}
class PhoneNumber extends Component {
	render() {
		return (
			<span className="phone">{this.props.phone}</span>
			)
	}
}
class Menu extends React.Component {
  render() {
    return (
    	<Grid>
    		<Row>
    			<Col lg={3}>
    				<TextBlockRepair>Ремонт айфонов в сервисном центре и на выезде</TextBlockRepair>
    			</Col>
    			<Col lg={3} lgOffset={1}>
    				<TextBlockScheduleOffice>
    					<ScheduleOffice schedule="Пн-пт с 10 до 20, сб,вс с 11 до 18" />
    					<Address address="Ленинская, 301" />
    				</TextBlockScheduleOffice>
    			</Col>
    			<Col lg={3}>
    				<TextBlockSchedulePhone>
    					<SchedulePhone schedule="Звонки принимаются 24 часа" />
    					<PhoneNumber phone="8 (846) 922 55 44" />
    				</TextBlockSchedulePhone>    			
    			</Col>
    			<Col lg={2}>
    				<ButtonCall>Заказать звонок!</ButtonCall>
    			</Col>
    		</Row>
    	</Grid>
    )
  }
}

export default Menu
