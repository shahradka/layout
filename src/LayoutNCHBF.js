import React,{useState} from 'react';
import Header from './Header';
import Body from './BodyDemo';
import Nav from './NavDemo';
import Footer from './FooterDemo';
import Container from './ContainerDemo';
import SplitterLayout from 'react-splitter-layout';
import PropTypes from 'prop-types';
import CollapsibleButton from './CollapsibleButton';
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

	const LayoutNCHBF = ({children, navMinWidth, navWidth, bodyMinWidth, isPercentage}) =>
	{
		const [isCollapsed,setIsCollapsed] = useState(false);
		function handleClick(e)
		{
			setIsCollapsed(!isCollapsed);
		}
		const headerBodyFooter = children.map(child => {
			if(child.key === "header")
				return (
					<HeaderContainer>
					<CollapsibleButton onClick={handleClick} />
					<Header key={child.id}>
						{fetchChildren(child)}
						</Header>
					</HeaderContainer>
				)
			else if(child.key === "body")
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

		});
		const nav = children.map(child => {
				if(child.key === "navigation")
					return(
						<Nav key={child.id} >
							{fetchChildren(child)}
						</Nav>
					)
		})

	return (

		<SplitterLayout
		primaryMinSize={bodyMinWidth}
		secondaryMinSize={navMinWidth}
		secondaryInitialSize={navWidth}
		percentage={isPercentage}
		customClassName={isCollapsed? 'isExpand' : ''}
		>
			<Container>
				{headerBodyFooter}
			</Container>
			<Nav className={isCollapsed? 'isCollapsed' : ''}>
				{nav}
			</Nav>
		</SplitterLayout>
	)
}

LayoutNCHBF.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutNCHBF;
