import React, { Component } from 'react';
import styled from 'styled-components'

const StyledMenuLink = styled.a`
	color: #fff;
	font-size: 14px;
	font-weight: 400;
	line-height: 27px;
	padding: 0 20px;
	border-right: 1px dotted #969696;
	&:hover {
		color: #8d8d8d;
		text-decoration: none;
	}
	&:last-child {
		border-right: none;
	}
`

class MenuLink extends React.Component {
  render() {
    return (
    	<StyledMenuLink href={this.props.link}>{this.props.text}</StyledMenuLink>
    )
  }
}

export default MenuLink
