import React,{useState} from 'react';
import Header from './Header';
import BodyDemo from './BodyDemo';
import NavDemo from './NavDemo';
import FooterDemo from './FooterDemo';
import ContainerDemo from './ContainerDemo';
import SplitterLayout from 'react-splitter-layout';
import HeaderContainerDemo from './HeaderContainerDemo';
import PropTypes from 'prop-types';
import CollapsibleButton from './CollapsibleButton';

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
	const headerTemplates = <HeaderContainerDemo><CollapsibleButton onClick={handleClick} /><Header>{header}</Header></HeaderContainerDemo>;
	const bodyTemplates = 	<BodyDemo>{children}</BodyDemo>;
	const footerTemplates = <FooterDemo>{footer}</FooterDemo>;

return (

	<SplitterLayout
	primaryMinSize={bodyMinWidth}
	secondaryMinSize={navMinWidth}
	secondaryInitialSize={navWidth}
	percentage={isPercentage}
	customClassName={isCollapsed? 'isExpand' : ''}
	>
		<ContainerDemo>
			{headerTemplates}
			{bodyTemplates}
			{footerTemplates}
		</ContainerDemo>
		<NavDemo className={isCollapsed? 'isCollapsed' : ''}>
			{nav}
		</NavDemo>
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
