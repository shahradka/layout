import React from 'react';
import Header from './Header';
import Body from './Body';
import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import PropTypes from 'prop-types';
import HeaderContainer from './HeaderContainer';
import 'react-splitter-layout/lib/index.css';
import './css/rtl.css';
import './css/styles.css';

function fetchChildren(input)
{
	if(!input || !input.children)
		return input;
	return fetchChildren(input.children);
}

	const LayoutHNCBF = ({children}) =>
	{
		const headerNav = children.map(child => {
			if(child.key === "header")
				return (
					<Header key={child.id}>
						{fetchChildren(child)}
					</Header>
				)
			else if(child.key === "navigation")
				return(
					<Nav horizonNav={true} key={child.id} >
						{fetchChildren(child)}
					</Nav>
				)

		});
		const bodyFooter = children.map(child => {
			if(child.key === "body")
					return(
						<Body key={child.id}>
							{fetchChildren(child)}
						</Body>
					)
			else if(child.key === "footer")
			return(
				<Footer key={child.id}>
					{fetchChildren(child)}
				</Footer>
			)
		})

	return (
			<React.Fragment>
				<HeaderContainer>
					{headerNav}
				</HeaderContainer>
				<Container>
					{bodyFooter}
				</Container>
			</React.Fragment>
	)
}

LayoutHNCBF.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHNCBF;
