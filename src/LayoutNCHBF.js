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

	const LayoutNCHBF = ({children, header, nav, footer, navMinWidth, navWidth, bodyMinWidth, isPercentage}) =>
	{
		const [isCollapsed,setIsCollapsed] = useState(false);
		function handleClick(e)
		{
			setIsCollapsed(!isCollapsed);
		}
		const headerTemplates = <HeaderContainer><CollapsibleButton onClick={handleClick} /><Header>{header}</Header></HeaderContainer>;
		const bodyTemplates = 	<Body>{children}</Body>;
		const navTemplates = {nav};
		const footerTemplates = <Footer>{footer}</Footer>;

	return (

		<SplitterLayout
		primaryMinSize={bodyMinWidth}
		secondaryMinSize={navMinWidth}
		secondaryInitialSize={navWidth}
		percentage={isPercentage}
		customClassName={isCollapsed? 'isExpand' : ''}
		>
			<Container>
				{headerTemplates}
				{bodyTemplates}
				{footerTemplates}
			</Container>
			<Nav className={isCollapsed? 'isCollapsed' : ''}>
				{navTemplates}
			</Nav>
		</SplitterLayout>
	)
}

LayoutNCHBF.propTypes = {
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  nav: PropTypes.node,
  navMinWidth: PropTypes.number,
  navWidth: PropTypes.number,
  bodyMinWidth: PropTypes.number,
  isPercentage: PropTypes.bool
};

export default LayoutNCHBF;
