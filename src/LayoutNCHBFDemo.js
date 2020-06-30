import React,{useState, useEffect} from 'react';
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

function fetchChildren(input)
{
	if(!input || !input.children)
		return input;
	return fetchChildren(input.children);
}

	const LayoutNCHBFDemo = ({children, navMinWidth, navWidth, bodyMinWidth, isPercentage}) =>
	{
		const [isCollapsed,setIsCollapsed] = useState(false);

		function handleClick(e)
		{
			setIsCollapsed(!isCollapsed);
			console.log(isCollapsed);
		}
		const headerBodyFooter = children.map(child => {
			if(child.key === "header")
				return (
					<HeaderContainerDemo>
						<CollapsibleButton onClick={handleClick} />
						<Header key={child.key}>
							{fetchChildren(child)}
						</Header>
					</HeaderContainerDemo>
				)
			else if(child.key === "body")
					return(
						<BodyDemo key={child.key}>
							{fetchChildren(child)}
						</BodyDemo>
					)
			else if(child.key === "footer")
			return(
				<FooterDemo key={child.key}>
					{fetchChildren(child)}
				</FooterDemo>
			)

		});
		const nav = children.map(child => {
				if(child.key === "navigation")
					return(
						<NavDemo key={child.key}>
							{fetchChildren(child)}
						</NavDemo>
					)
		})

	console.log(!isCollapsed?navWidth:navMinWidth)
	return (
		<SplitterLayout
			primaryMinSize={bodyMinWidth}
			secondaryMinSize={navMinWidth}
			secondaryInitialSize={!isCollapsed?navWidth:navMinWidth}
			percentage={isPercentage}
		>
			<ContainerDemo>
				{headerBodyFooter}
			</ContainerDemo>
			<NavDemo>
				{nav}
			</NavDemo>
		</SplitterLayout>
	)
}

LayoutNCHBFDemo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutNCHBFDemo;
