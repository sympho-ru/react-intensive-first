import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'
import MenuLink from './MenuLink'

const MenuList = styled.ul`
	display: flex;
	align-items: center;
	padding: 0;
	height: 48px;
`

class Header extends Component {
  render() {
    return (
    	<Grid>
	    	<Row>
	    		<Col lg={12}>
	    			<nav>
	    				<MenuList>
	    					<MenuLink link="#/" text="Вызов мастера" />
	    					<MenuLink link="#/" text="Прайс на ремонт" />
	    					<MenuLink link="#/" text="Наши преимущества" />
	    					<MenuLink link="#/" text="Схема работы" />
	    					<MenuLink link="#/" text="Отзывы клиентов" />
	    					<MenuLink link="#/" text="Примеры работ" />
	    					<MenuLink link="#/" text="Контакты" />
	    				</MenuList>
	    			</nav>
	    		</Col>
	    	</Row>
	    </Grid>
    )
  }
}

export default Header
